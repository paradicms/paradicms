import mimetypes
import shutil
from pathlib import Path

from PIL import UnidentifiedImageError

from paradicms_ssg.utils.get_image_file_mime_type import get_image_file_mime_type
from paradicms_ssg.utils.sha256_hash_file import sha256_hash_file


class FsImageArchiver:
    def __init__(self, *, base_url: str, root_directory_path: Path):
        self.__base_url = base_url.rstrip("/") + "/"
        self.__root_directory_path = root_directory_path

    def __call__(self, *, image_file_path: Path) -> str:
        try:
            image_file_mime_type = get_image_file_mime_type(image_file_path)
        except UnidentifiedImageError:
            raise ValueError(f"unable to get MIME type {image_file_path}")

        guess_file_ext = mimetypes.guess_extension(image_file_mime_type, strict=False)
        if guess_file_ext is None:
            raise ValueError(
                f"unable to guess file extension for MIME type {image_file_mime_type}"
            )

        archived_image_file_name = sha256_hash_file(image_file_path) + guess_file_ext
        archived_image_file_path = self.__root_directory_path / archived_image_file_name
        self.__root_directory_path.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(image_file_path, archived_image_file_path)
        return self.__base_url + archived_image_file_name
