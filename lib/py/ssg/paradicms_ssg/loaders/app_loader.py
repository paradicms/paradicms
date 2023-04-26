import logging
from pathlib import Path
from typing import Optional, Tuple

import paradicms_ssg.namespaces
from paradicms_etl.loaders.buffering_loader import BufferingLoader
from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader
from paradicms_etl.models.image import Image
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_ssg.app_package import AppPackage
from paradicms_ssg.deployer import Deployer
from paradicms_ssg.deployers.fs_deployer import FsDeployer
from paradicms_ssg.image_archiver import ImageArchiver
from paradicms_ssg.image_archivers.fs_image_archiver import FsImageArchiver
from paradicms_ssg.loaders.images_loader import ImagesLoader
from paradicms_ssg.models.app_configuration import AppConfiguration


class AppLoader(BufferingLoader):
    """
    Loader that statically generates a website using one of the app implementations in app/.

    The loader:
    - Writes the input data to an rdf/turtle file
    - Archives original images (via an ImageArchiver)
    - Thumbnails images and archives them (via ImagesLoader)
    - Calls npm/yarn to generate the site (via AppPackage)
    - Optionally deploys the generated site (via a Deployer)

    As noted, this class delegate most of its work to auxiliary classes such as AppPackage.
    """

    _APP_DEFAULT = "work-search"

    def __init__(
        self,
        *,
        cache_dir_path: Path,
        pipeline_id: str,
        deployer: Optional[Deployer] = None,
        dev: bool = False,
        image_archiver: Optional[ImageArchiver] = None,
        sleep_s_after_image_download: Optional[float] = None,
        thumbnail_max_dimensions: Tuple[
            ImageDimensions, ...
        ] = ImagesLoader.THUMBNAIL_MAX_DIMENSIONS_DEFAULT,
    ):
        """
        :param cache_dir_path: directory in which to store cached data such as image thumbnails
        :param deployer: optional deployer implementation; if not specified, defaults to a file system deployer that writes to the loaded data directory
        :param dev: transform the input data to RDF and archive and thumbnail but run the Next.js dev server instead of generating and deploying static files
        :param image_archiver: optional image archiver implementation; if not specified, defaults to a file system archiver that writes to Next's public/ directory
        :param pipeline_id: pipeline identifier
        :param sleep_s_after_image_download: sleep this number of seconds after downloading each image, to avoid triggering denial of service mechanisms
        :param thumbnail_max_dimensions: maximum dimensions of amage thumbnails to use
        """

        BufferingLoader.__init__(self)
        self.__cache_dir_path = cache_dir_path
        self.__deployer = deployer
        self.__dev = dev
        self.__image_archiver = image_archiver
        self.__logger = logging.getLogger(__name__)
        self.__pipeline_id = pipeline_id
        self.__sleep_s_after_image_download = sleep_s_after_image_download
        self.__thumbnail_max_dimensions = thumbnail_max_dimensions

    def _flush(self, models):
        app_configuration: Optional[AppConfiguration] = None
        for model in models:
            if isinstance(model, AppConfiguration):
                app_configuration = model
                break
        if app_configuration is None:
            self.__logger.warning("no %s in models", AppConfiguration.__name__)

        app = app_configuration.app if app_configuration is not None else None
        if app is None:
            app = self._APP_DEFAULT
            self.__logger.info(
                "app configuration does not specify an app, using the default %s",
                app,
            )

        app_package = AppPackage(app=app)

        image_archiver = self.__image_archiver
        if image_archiver is None:
            # If no image archiver specified, "archive" copies of images to the Next.js public/ directory, which contains static assets.
            image_archiver = FsImageArchiver(
                # base_url=f"{self.__base_url_path.rstrip('/')}/img/archive/",
                base_url="/img/archive/",
                root_directory_path=app_package.app_dir_path
                / "public"
                / "img"
                / "archive",
            )

        copyable_original_images = []
        non_copyable_images = []
        other_models = []
        for model in models:
            if isinstance(model, Image):
                image = model
                if image.copyable:
                    if image.original_image_uri is None:
                        copyable_original_images.append(image)
                else:
                    non_copyable_images.append(image)
            else:
                other_models.append(model)

        gui_images = []

        if non_copyable_images:
            self.__logger.info(
                "using %d non-copyable images as-is", len(non_copyable_images)
            )
            gui_images.extend(non_copyable_images)

        if copyable_original_images:
            self.__logger.info(
                "thumbnailing and archiving %d copyable original images",
                len(copyable_original_images),
            )
            gui_images.extend(
                ImagesLoader(
                    image_archiver=image_archiver,
                    loaded_data_dir_path=self.__cache_dir_path / "images",
                    sleep_s_after_image_download=self.__sleep_s_after_image_download,
                    thumbnail_max_dimensions=self.__thumbnail_max_dimensions,
                )(flush=True, models=copyable_original_images)
            )

            models = tuple(gui_images + other_models)

        data_file_paths = []

        if models:
            loaded_data_file_path = app_package.app_dir_path / "public" / "data.trig"
            data_loader = RdfFileLoader(
                additional_namespace_modules=(paradicms_ssg.namespaces,),
                rdf_file_path=loaded_data_file_path,
            )
            data_loader(flush=True, models=models)
            self.__logger.info("loaded data to %s", loaded_data_file_path)
            data_file_paths.append(loaded_data_file_path)

        app_package_build_kwds = {
            "data_file_paths": tuple(data_file_paths),
        }

        if self.__dev:
            app_package.dev(**app_package_build_kwds)
        else:
            app_package.clean()

            app_out_dir_path = app_package.build(**app_package_build_kwds)

            deployer = self.__deployer
            if deployer is None:
                deployer = FsDeployer(
                    deploy_dir_path=self.__cache_dir_path / "deployed"
                )

            deployer(app_out_dir_path=app_out_dir_path)
