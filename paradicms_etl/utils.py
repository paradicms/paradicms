from pathlib import Path
from typing import Dict

from paradicms_etl.models.image import Image
from paradicms_etl.models.image_dimensions import ImageDimensions


def is_uri(string: str) -> bool:
    """
    Check if a string is a URI.

    Only supports http:// and https:// currently.
    """

    if not isinstance(string, str):
        return False
    if string.startswith("http://") or string.startswith("https://"):
        return True
    else:
        return False


def sanitize_method_name(string: str) -> str:
    """
    Sanitize a string so that it's safe to use as a method name.
    """

    return (
        string.replace(" ", "_")
        .replace(",", "_")
        .lower()
        .encode("ascii", "ignore")
        .decode("ascii")
    )


def strip_csv_row(csv_row: Dict[str, str]) -> Dict[str, str]:
    """
    strip() each column of a CSV row dict, removing items that are empty after stripping.
    Copies on write.
    :return new CSV row dict with stripped columns
    """

    row_copy = {}
    for key, value in csv_row.items():
        key = key.strip()
        if not key:
            continue
        value = value.strip()
        if not value:
            continue
        row_copy[key] = value
    return row_copy


def thumbnail_image(
    *,
    input_image_file_path: Path,
    output_thumbnail_file_path: Path,
    output_thumbnail_dimensions: ImageDimensions
) -> None:
    with Image.open(str(input_image_file_path)) as image:
        image.thumbnail(
            (output_thumbnail_dimensions.width, output_thumbnail_dimensions.height)
        )
        image.save(str(output_thumbnail_file_path))
