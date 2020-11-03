from pathlib import Path

from PIL import Image
from paradicms_etl.models.image_dimensions import ImageDimensions


def thumbnail_image(
    *,
    input_image_file_path: Path,
    output_thumbnail_file_path: Path,
    output_thumbnail_max_dimensions: ImageDimensions
) -> ImageDimensions:
    """
    Create a thumbnail of an image, preserving aspect ratio.
    :param input_image_file_path: path to original image to thumbnail
    :param output_thumbnail_file_path: path to new thumbnail
    :param output_thumbnail_max_dimensions: max dimensions of new thumbnail
    :return: actual dimensions of new thumbnail
    """

    with Image.open(str(input_image_file_path)) as image:
        input_image_format = image.format
        image.thumbnail(
            (
                output_thumbnail_max_dimensions.width,
                output_thumbnail_max_dimensions.height,
            )
        )
        output_thumbnail_width, output_thumbnail_height = image.size
        image.save(str(output_thumbnail_file_path), format=input_image_format)
        return ImageDimensions(
            height=output_thumbnail_height, width=output_thumbnail_width
        )
