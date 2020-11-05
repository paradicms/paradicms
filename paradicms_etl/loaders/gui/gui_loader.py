import os
from datetime import datetime
from pathlib import Path
from typing import Optional, Tuple, Union

from paradicms_etl._image_archiver import _ImageArchiver
from paradicms_etl.loaders._buffering_loader import _BufferingLoader
from paradicms_etl.loaders.gui._gui_deployer import _GuiDeployer
from paradicms_etl.loaders.gui.fs_gui_deployer import FsGuiDeployer
from paradicms_etl.loaders.gui.gui_builder import GuiBuilder
from paradicms_etl.loaders.gui.gui_data_loader import GuiDataLoader
from paradicms_etl.loaders.gui.gui_images_loader import GuiImagesLoader
from paradicms_etl.models._image import _Image
from paradicms_etl.models.image_dimensions import ImageDimensions


class GuiLoader(_BufferingLoader):
    def __init__(
        self,
        *,
        gui: Union[Path, str],
        deployer: Optional[_GuiDeployer] = None,
        image_archiver: Optional[_ImageArchiver] = None,
        sleep_s_after_image_download: Optional[float] = None,
        thumbnail_max_dimensions: Tuple[
            ImageDimensions, ...
        ] = GuiImagesLoader.THUMBNAIL_MAX_DIMENSIONS_DEFAULT,
        **kwds,
    ):
        _BufferingLoader.__init__(self, **kwds)
        self.__deployer = deployer
        self.__gui = gui
        self.__image_archiver = image_archiver
        self.__sleep_s_after_image_download = sleep_s_after_image_download
        self.__thumbnail_max_dimensions = thumbnail_max_dimensions

    def _flush(self, models):
        if self.__image_archiver and self.__thumbnail_max_dimensions:
            copyable_original_images = []
            non_copyable_images = []
            other_models = []
            for model in models:
                if isinstance(model, _Image):
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
                        image_archiver=self.__image_archiver,
                        loaded_data_dir_path=self._loaded_data_dir_path,
                        pipeline_id=self._pipeline_id,
                        sleep_s_after_image_download=self.__sleep_s_after_image_download,
                        thumbnail_max_dimensions=self.__thumbnail_max_dimensions,
                    ).load(models=copyable_original_images)
                )

            models = tuple(gui_images + other_models)

        data_dir_path = self._loaded_data_dir_path / "data"
        data_loader = GuiDataLoader(
            loaded_data_dir_path=data_dir_path,
            pipeline_id=self._pipeline_id,
        )
        data_loader.load(models=models)
        data_loader.flush()
        self._logger.info("loaded data to %s", data_dir_path)

        gui_builder = GuiBuilder(gui=self.__gui)

        gui_builder.clean()

        gui_out_dir_path = gui_builder.build(data_dir_path=data_dir_path)

        deployer = self.__deployer
        if deployer is None:
            deployer = FsGuiDeployer(
                gui_deploy_dir_path=self._loaded_data_dir_path / "deployed"
            )

        deployer.deploy(gui_out_dir_path=gui_out_dir_path)
