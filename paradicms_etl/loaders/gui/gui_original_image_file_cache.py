import logging
import os.path
from pathlib import Path, PurePath, PureWindowsPath
from typing import Optional
from urllib.error import HTTPError
from urllib.parse import unquote, urlparse

from paradicms_etl.file_cache import FileCache
from paradicms_etl.models.image import Image


class GuiOriginalImageFileCache:
    """
    File-backed cache for original Images (i.e., Images with original_image_uri=None), retrieved from an external URI.

    Separated from GuiLoader for modularity and testability.
    """

    class CacheOriginalImageException(Exception):
        pass

    def __init__(
        self,
        *,
        cache_dir_path: Path,
        sleep_s_after_image_download: Optional[float] = None,
    ):
        self.__file_cache = FileCache(
            cache_dir_path=cache_dir_path,
            sleep_s_after_download=sleep_s_after_image_download,
        )
        self.__logger = logging.getLogger(self.__class__.__name__)

    def cache_original_image(self, original_image: Image) -> Path:
        """
        Cache an original Image.

        :return: path to the cached original image file
        :raise CacheOriginalImageException if there was an error retrieving the original image
        """

        assert original_image.original_image_uri is None

        original_image_uri_parsed = urlparse(str(original_image.uri))
        if original_image_uri_parsed.scheme == "file":
            original_image_file_path = unquote(original_image_uri_parsed.path)
            if isinstance(
                PurePath(), PureWindowsPath
            ) and original_image_file_path.startswith("/"):
                original_image_file_path = PurePath(original_image_file_path[1:])
            else:
                original_image_file_path = PurePath(original_image_file_path)

            if not os.path.isfile(original_image_file_path):
                raise self.CacheOriginalImageException(
                    f"original image {original_image.uri} not found"
                )

            self.__logger.debug(
                "using original image %s at %s",
                original_image.uri,
                original_image_file_path,
            )

            assert original_image_file_path is not None
            return Path(original_image_file_path)
        else:
            try:
                original_image_file_path = self.__file_cache.get_file(
                    original_image.uri
                )
            except HTTPError as http_error:
                if http_error.code == 404:
                    raise self.CacheOriginalImageException(
                        f"original image {original_image.uri} not found"
                    ) from http_error
                else:
                    raise self.CacheOriginalImageException(
                        f"original image {original_image.uri} could not be retrieved"
                    ) from http_error
            except ValueError as e:
                raise self.CacheOriginalImageException(
                    f"error caching original image {original_image.uri}"
                ) from e

            self.__logger.debug(
                "cached original image %s at %s",
                original_image.uri,
                original_image_file_path,
            )

            assert original_image_file_path is not None
            return original_image_file_path
