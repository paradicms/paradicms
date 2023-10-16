from paradicms_etl.models.image import Image
from paradicms_ssg.images_archiver import ImagesArchiver

from .image_archivers.nop_image_archiver import NopImageArchiver


def test_load(synthetic_data_original_images: tuple[Image, ...], tmp_path):
    loader = ImagesArchiver(
        image_archiver=NopImageArchiver(), loaded_data_dir_path=tmp_path
    )
    loaded_images: tuple[Image, ...] = tuple(
        loader(
            flush=True,
            loaded_data_dir_path=tmp_path,
            models=synthetic_data_original_images[:2],
        )
    )
    assert loaded_images
    assert len(set(loaded_image.uri for loaded_image in loaded_images)) == len(
        loaded_images
    )
    assert len(loaded_images) % 5 == 0  # 1 original, 4 thumbnails per original
    assert all(isinstance(loaded_image, Image) for loaded_image in loaded_images)
    loaded_image_i = 0
    while loaded_image_i < len(loaded_images):
        original_image = loaded_images[loaded_image_i]
        thumbnail_images = loaded_images[loaded_image_i + 1 : loaded_image_i + 5]
        assert len(thumbnail_images) == 4
        for thumbnail_image in thumbnail_images:
            assert thumbnail_image.uri in set(original_image.thumbnail_uris)
        loaded_image_i += 5
    assert loaded_image_i == len(loaded_images)
