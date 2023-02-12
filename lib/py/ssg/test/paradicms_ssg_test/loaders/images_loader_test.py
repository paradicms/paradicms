from pathlib import Path
from typing import Tuple

from paradicms_etl.models.image import Image

from paradicms_ssg.loaders.images_loader import ImagesLoader
from .nop_image_archiver import NopImageArchiver


def test_load(test_data_original_images: Tuple[Image, ...], tmp_path):
    loader = ImagesLoader(
        image_archiver=NopImageArchiver(),
    )
    loaded_images = tuple(
        loader.load(
            loaded_data_dir_path=Path(tmp_path), models=test_data_original_images
        )
    )
    assert len(loaded_images) == len(test_data_original_images) * 3
    assert all(isinstance(loaded_image, Image) for loaded_image in loaded_images)
    assert len(set(loaded_image.uri for loaded_image in loaded_images)) == len(
        loaded_images
    )
