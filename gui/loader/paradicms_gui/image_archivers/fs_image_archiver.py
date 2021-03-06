import mimetypes
import shutil
from pathlib import Path

from paradicms_gui.image_archiver import ImageArchiver
from paradicms_gui.utils.get_image_file_mime_type import get_image_file_mime_type
from paradicms_gui.utils.sha256_hash_file import sha256_hash_file


class FsImageArchiver(ImageArchiver):
    def __init__(
        self,
        *,
        base_url: str,
        root_directory_path: Path,
        force_overwrite: bool = False,
        **kwds,
    ):
        ImageArchiver.__init__(self, **kwds)

        self.__base_url = base_url.rstrip("/") + "/"
        self.__force_overwrite = force_overwrite
        self.__root_directory_path = root_directory_path

    def archive_image(self, *, image_file_path: Path) -> str:
        image_file_mime_type = get_image_file_mime_type(image_file_path)

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
