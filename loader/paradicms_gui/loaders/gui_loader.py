from pathlib import Path
from typing import Optional, Tuple, Union

from paradicms_etl.loaders._buffering_loader import _BufferingLoader
from paradicms_etl.loaders.rdf_file_loader import RdfFileLoader
from paradicms_etl.models.image import Image
from paradicms_etl.models.image_dimensions import ImageDimensions

from paradicms_gui._gui_deployer import _GuiDeployer
from paradicms_gui._image_archiver import _ImageArchiver
from paradicms_gui.gui_deployers.fs_gui_deployer import FsGuiDeployer
from paradicms_gui.image_archivers.fs_image_archiver import FsImageArchiver
from paradicms_gui.loaders.gui_images_loader import GuiImagesLoader
from paradicms_gui.loaders.gui_package import GuiPackage


class GuiLoader(_BufferingLoader):
    """
    Loader that statically generates a web site using one of the GUI implementations in gui/.

    The loader:
    - Writes the input data to an rdf/turtle file
    - Archives original images (via an _ImageArchiver)
    - Thumbnails images and archives them (via GuiImagesLoader)
    - Calls npm to generate the site (via GuiPackage)
    - Optionally deploys the generated site (via a _GuiDeployer)

    As noted, this class delegate most of its work to auxiliary classes such as GuiPackage.
    """

    def __init__(
        self,
        *,
        gui: Union[Path, str],
        base_url_path: str = "",
        deployer: Optional[_GuiDeployer] = None,
        dev: bool = False,
        image_archiver: Optional[_ImageArchiver] = None,
        sleep_s_after_image_download: Optional[float] = None,
        thumbnail_max_dimensions: Tuple[
            ImageDimensions, ...
        ] = GuiImagesLoader.THUMBNAIL_MAX_DIMENSIONS_DEFAULT,
        **kwds,
    ):
        """
        :param base_url_path: Next.js basePath (https://nextjs.org/docs/api-reference/next.config.js/basepath)
        :param gui: name of a gui (in gui/ of this repository) or path to a gui
        :param deployer: optional deployer implementation; if not specified, defaults to a file system deployer that writes to the loaded data directory
        :param dev: transform the input data to RDF and archive and thumbnail but run the Next.js dev server instead of generating and deploying static files
        :param image_archiver: optional image archiver implementation; if not specified, defaults to a file system archiver that writes to Next's public/ directory
        :param sleep_s_after_image_download: sleep this number of seconds after downloading each image, to avoid triggering denial of service mechanisms
        :param thumbnail_max_dimensions: maximum dimensions of amage thumbnails to use
        """

        _BufferingLoader.__init__(self, **kwds)
        self.__base_url_path = base_url_path
        self.__deployer = deployer
        self.__dev = dev
        self.__gui = gui
        self.__image_archiver = image_archiver
        self.__sleep_s_after_image_download = sleep_s_after_image_download
        self.__thumbnail_max_dimensions = thumbnail_max_dimensions

    def _flush(self, models):
        gui_package = GuiPackage(base_url_path=self.__base_url_path, gui=self.__gui)

        image_archiver = self.__image_archiver
        if image_archiver is None:
            # If no image archiver specified, "archive" copies of images to the Next.js public/ directory, which contains static assets.
            image_archiver = FsImageArchiver(
                base_url=f"{self.__base_url_path.rstrip('/')}/img/archive/",
                root_directory_path=gui_package.gui_dir_path
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
            self._logger.info(
                "using %d non-copyable images as-is", len(non_copyable_images)
            )
            gui_images.extend(non_copyable_images)

        if copyable_original_images:
            self._logger.info(
                "thumbnailing and archiving %d copyable original images",
                len(copyable_original_images),
            )
            gui_images.extend(
                GuiImagesLoader(
                    image_archiver=image_archiver,
                    loaded_data_dir_path=self._loaded_data_dir_path,
                    pipeline_id=self._pipeline_id,
                    sleep_s_after_image_download=self.__sleep_s_after_image_download,
                    thumbnail_max_dimensions=self.__thumbnail_max_dimensions,
                ).load(models=copyable_original_images)
            )

            models = tuple(gui_images + other_models)

        data_dir_path = self._loaded_data_dir_path / "data"
        data_loader = RdfFileLoader(
            loaded_data_dir_path=data_dir_path,
            pipeline_id=self._pipeline_id,
        )
        data_loader.load(models=models)
        data_loader.flush()
        data_ttl_file_path = data_dir_path / (self._pipeline_id + ".ttl")
        self._logger.info("loaded data to %s", data_ttl_file_path)

        if self.__dev:
            gui_package.dev(data_ttl_file_path=data_ttl_file_path)
        else:
            gui_package.clean()

            gui_out_dir_path = gui_package.build(data_ttl_file_path=data_ttl_file_path)

            deployer = self.__deployer
            if deployer is None:
                deployer = FsGuiDeployer(
                    gui_deploy_dir_path=self._loaded_data_dir_path / "deployed"
                )

            deployer.deploy(gui_out_dir_path=gui_out_dir_path)
