import logging
from pathlib import Path
from typing import Iterable, List, Optional, Set, Tuple

from more_itertools import consume
from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader
from paradicms_etl.model import Model
from paradicms_etl.models.image import Image
from paradicms_etl.models.image_dimensions import ImageDimensions
from rdflib import URIRef

import paradicms_ssg.namespaces
from paradicms_ssg.app_package import AppPackage
from paradicms_ssg.deployer import Deployer
from paradicms_ssg.deployers.fs_deployer import FsDeployer
from paradicms_ssg.image_archiver import ImageArchiver
from paradicms_ssg.image_archivers.fs_image_archiver import FsImageArchiver
from paradicms_ssg.loaders.images_loader import ImagesLoader
from paradicms_ssg.models.app_configuration import AppConfiguration


class AppLoader:
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
    NEXT_COMMANDS_DEFAULT = ("clean", "build", "export")

    def __init__(
        self,
        *,
        cache_dir_path: Path,
        pipeline_id: str,
        client_api: Optional[str] = None,
        deployer: Optional[Deployer] = None,
        image_archiver: Optional[ImageArchiver] = None,
        next_commands: Tuple[str, ...] = NEXT_COMMANDS_DEFAULT,
        sleep_s_after_image_download: Optional[float] = None,
        thumbnail_max_dimensions: Tuple[
            ImageDimensions, ...
        ] = ImagesLoader.THUMBNAIL_MAX_DIMENSIONS_DEFAULT,
    ):
        """
        :param cache_dir_path: directory in which to store cached data such as image thumbnails
        :param client_api: API to use on the client side, defaults to using static data
        :param deployer: optional deployer implementation; if not specified, defaults to a file system deployer that writes to the loaded data directory
        :param image_archiver: optional image archiver implementation; if not specified, defaults to a file system archiver that writes to Next's public/ directory
        :param next_commands: Next.js commands to execute
        :param pipeline_id: pipeline identifier
        :param sleep_s_after_image_download: sleep this number of seconds after downloading each image, to avoid triggering denial of service mechanisms
        :param thumbnail_max_dimensions: maximum dimensions of image thumbnails to use
        """

        self.__buffered_app_configuration: Optional[AppConfiguration] = None
        self.__buffered_images: List[Image] = []
        self.__buffered_other_models: List[Model] = []
        self.__cache_dir_path = cache_dir_path
        self.__client_api = client_api
        self.__deployer = deployer
        self.__image_archiver = image_archiver
        self.__logger = logging.getLogger(__name__)
        self.__next_commands = next_commands
        self.__pipeline_id = pipeline_id
        self.__sleep_s_after_image_download = sleep_s_after_image_download
        self.__thumbnail_max_dimensions = thumbnail_max_dimensions
        self.__thumbnail_uris: Set[URIRef] = set()

    def __call__(self, *, flush: bool, models: Iterable[Model]):
        # Iterate over models once, buffering into different lists
        for model in models:
            if isinstance(model, AppConfiguration):
                self.__buffered_app_configuration = model
            elif isinstance(model, Image):
                image = model
                self.__buffered_images.append(image)
                # Keep track of which images are referenced as thumbnails
                for thumbnail_uri in image.thumbnail_uris:
                    self.__thumbnail_uris.add(thumbnail_uri)
            else:
                self.__buffered_other_models.append(model)

            yield model

        if flush:
            self.__flush()

    def __flush(self):
        if self.__buffered_app_configuration is not None:
            self.__logger.info("%s found in models", AppConfiguration.__name__)
            app = self.__buffered_app_configuration.app
        else:
            self.__logger.warning("no %s in models", AppConfiguration.__name__)
            app = None

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

        models = []

        if self.__buffered_app_configuration is not None:
            models.append(self.__buffered_app_configuration)

        if self.__buffered_images:
            copyable_original_images: List[Image] = []
            other_images: List[Image] = []

            for image in self.__buffered_images:
                if image.copyable and (image.uri not in self.__thumbnail_uris):
                    copyable_original_images.append(image)
                else:
                    other_images.append(image)

            self.__logger.info(
                "thumbnailing and archiving %d copyable original images",
                len(copyable_original_images),
            )
            models.extend(
                ImagesLoader(
                    image_archiver=image_archiver,
                    loaded_data_dir_path=self.__cache_dir_path / "images",
                    sleep_s_after_image_download=self.__sleep_s_after_image_download,
                    thumbnail_max_dimensions=self.__thumbnail_max_dimensions,
                )(flush=True, models=copyable_original_images)
            )

            if other_images:
                self.__logger.info(
                    "using %d non-copyable/thumbnail images as-is",
                    len(other_images),
                )
                models.extend(other_images)

        models.extend(self.__buffered_other_models)

        data_file_paths = []

        if models:
            loaded_data_file_path = app_package.app_dir_path / "public" / "data.trig"
            data_loader = RdfFileLoader(
                additional_namespace_modules=(paradicms_ssg.namespaces,),
                rdf_file_path=loaded_data_file_path,
            )
            consume(data_loader(flush=True, models=models))
            self.__logger.info("loaded data to %s", loaded_data_file_path)
            data_file_paths.append(loaded_data_file_path)

        app_package_build_kwds = {
            "data_file_paths": tuple(data_file_paths),
        }
        if self.__client_api:
            app_package_build_kwds["client_api"] = self.__client_api

        for next_command in self.__next_commands:
            if next_command == "clean":
                app_package.clean()
            elif next_command == "build":
                app_package.build(**app_package_build_kwds)
            elif next_command == "dev":
                app_package.dev(**app_package_build_kwds)
            elif next_command == "export":
                app_out_dir_path = app_package.export()
                deployer = self.__deployer
                if deployer is None:
                    deployer = FsDeployer(
                        deploy_dir_path=self.__cache_dir_path / "deployment"
                    )
                deployer(app_out_dir_path=app_out_dir_path)
            elif next_command == "start":
                app_package.start(**app_package_build_kwds)
            else:
                raise ValueError(f"unknown Next.js command: {next_command}")
