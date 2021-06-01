import mimetypes
from pathlib import Path

from rdflib import URIRef

from paradicms_etl._image_archiver import _ImageArchiver
from paradicms_etl.utils.get_image_file_mime_type import get_image_file_mime_type
from paradicms_etl.utils.sha256_hash_file import sha256_hash_file


class FsImageArchiver(_ImageArchiver):
    def __init__(
        self,
        *,
        base_url: str,
        root_directory_path: Path,
        force_overwrite: bool = False,
        **kwds,
    ):
        _ImageArchiver.__init__(self, **kwds)

        self.__base_url = base_url.rstrip("/") + "/"
        self.__force_overwrite = force_overwrite
        self.__root_directory_path = root_directory_path

    def archive_image(self, *, image_file_path: Path) -> URIRef:
        image_file_mime_type = get_image_file_mime_type(image_file_path)

        guess_file_ext = mimetypes.guess_extension(image_file_mime_type, strict=False)
        if guess_file_ext is None:
            raise ValueError(
                f"unable to guess file extension for MIME type {image_file_mime_type}"
            )

        file_name = sha256_hash_file(image_file_path) + guess_file_ext
        file_path = self.__root_directory_path / file_name
        self.__root_directory_path.mkdir(parents=True, exist_ok=True)
