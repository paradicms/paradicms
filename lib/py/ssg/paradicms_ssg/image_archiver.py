from pathlib import Path
from typing import Protocol


class ImageArchiver(Protocol):
    def __call__(self, *, image_file_path: Path) -> str:
        """
        Archive an image at the given file path.
        Assumes the file path is transient.
        :return URL of the archived image, may be relative
        """
