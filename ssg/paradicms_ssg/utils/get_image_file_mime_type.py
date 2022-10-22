from pathlib import Path

from PIL import Image


def get_image_file_mime_type(image_file_path: Path):
    with Image.open(str(image_file_path)) as image:
        image_format = image.format
    return "image/" + image_format.lower()
