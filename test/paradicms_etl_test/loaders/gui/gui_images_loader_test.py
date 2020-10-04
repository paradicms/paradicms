from pathlib import Path
from typing import Tuple

from paradicms_etl.image_archivers.nop_image_archiver import NopImageArchiver
from paradicms_etl.loaders.gui.gui_images_loader import GuiImagesLoader
from paradicms_etl.models.image import Image


def test_load(test_data_original_images: Tuple[Image, ...], tmp_path):
    loader = GuiImagesLoader(
        data_dir_path=Path(tmp_path),
        image_archiver=NopImageArchiver(),
        pipeline_id="test",
    )
    loaded_images = tuple(loader.load(models=test_data_original_images))
    assert len(loaded_images) == len(test_data_original_images) * 3
