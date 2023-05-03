from typing import Tuple

from paradicms_etl.models.image import Image
from paradicms_ssg.loaders.images_loader import ImagesLoader
from .nop_image_archiver import NopImageArchiver


def test_load(synthetic_data_original_images: Tuple[Image, ...], tmp_path):
    loader = ImagesLoader(
        image_archiver=NopImageArchiver(), loaded_data_dir_path=tmp_path
    )
    loaded_images = tuple(
        loader(
            flush=True,
            loaded_data_dir_path=tmp_path,
            models=synthetic_data_original_images,
        )
    )
    assert len(loaded_images) == len(synthetic_data_original_images) * 6
    assert all(isinstance(loaded_image, Image) for loaded_image in loaded_images)
    assert len(set(loaded_image.uri for loaded_image in loaded_images)) == len(
        loaded_images
    )
