import logging
import os.path
from io import BytesIO
from pathlib import Path, PurePath, PureWindowsPath
from typing import Optional
from urllib.error import HTTPError
from urllib.parse import unquote, urlparse, ParseResult

from rdflib import URIRef

from paradicms_etl.models.image import Image
from paradicms_etl.models.image_data import ImageData
from paradicms_etl.utils.file_cache import FileCache


class OriginalImageFileCache:
    """
    File-backed cache for original Images (i.e., Images with original_image_uri=None), retrieved from an external URI.

    Separated from AppLoader for modularity and testability.
    """

    class CacheOriginalImageException(Exception):
        pass

    def __init__(
        self,
        *,
        cache_dir_path: Path,
        sleep_s_after_download: Optional[float] = None,
    ):
        self.__file_cache = FileCache(
            cache_dir_path=cache_dir_path,
            sleep_s_after_download=sleep_s_after_download,
        )
        self.__logger = logging.getLogger(self.__class__.__name__)

    def cache_original_image(self, original_image: Image) -> Path:
        """
        Cache an original Image.

        :return: path to the cached original image file
        :raise CacheOriginalImageException if there was an error retrieving the original image
        """

        assert original_image.original_image_uri is None

        # Prefer .src over .uri
        for check_original_image_src in (original_image.src, original_image.uri):
            if check_original_image_src is None:
                continue

            if isinstance(check_original_image_src, ImageData):
                return self.__cache_original_image_from_data(
                    original_image=original_image,
                    original_image_data=check_original_image_src,
                )
            elif isinstance(check_original_image_src, (str, URIRef)):
                check_original_image_url_parsed = urlparse(
                    str(check_original_image_src)
                )
                if check_original_image_url_parsed.scheme == "file":
                    return self.__cache_original_image_from_file_url(
                        original_image_file_url=check_original_image_src,
                        original_image_file_url_parsed=check_original_image_url_parsed,
                    )
                elif check_original_image_url_parsed.scheme in ("http", "https"):
                    return self.__cache_original_image_from_http_url(
                        original_image_http_url=check_original_image_src
                    )
                else:
                    self.__logger.debug(
                        "original image URL %s for original image %s has an unknown scheme",
                        check_original_image_src,
                        original_image.uri,
                    )
            else:
                raise NotImplementedError(
                    f"unknown image .src type: {type(check_original_image_src)}"
                )

        raise self.CacheOriginalImageException(
            "original image has unrecognized URL scheme(s)"
        )

    def __cache_original_image_from_data(
        self, *, original_image: Image, original_image_data: ImageData
    ) -> Path:
        pil_image = original_image_data.to_pil_image()
        pil_image_buffer = BytesIO()
        pil_image.save(pil_image_buffer, format="JPEG")
        return self.__file_cache.put_file(
            file_data=pil_image_buffer.getvalue(),
            file_mime_type="image/jpeg",
            file_url=original_image.uri,
        )

    def __cache_original_image_from_file_url(
        self,
        *,
        original_image_file_url: str,
        original_image_file_url_parsed: ParseResult,
    ) -> Path:
        original_image_file_path_str = unquote(original_image_file_url_parsed.path)
        if isinstance(
            PurePath(), PureWindowsPath
        ) and original_image_file_path_str.startswith("/"):
            original_image_file_path = PurePath(original_image_file_path_str[1:])
        else:
            original_image_file_path = PurePath(original_image_file_path_str)

        if not os.path.isfile(original_image_file_path):
            raise self.CacheOriginalImageException(
                f"original image {original_image_file_url} not found"
            )

        self.__logger.debug(
            "using original image %s at %s",
            original_image_file_url,
            original_image_file_path,
        )

        assert original_image_file_path is not None
        return Path(original_image_file_path)

    def __cache_original_image_from_http_url(
        self, original_image_http_url: str
    ) -> Path:
        try:
            original_image_file_path = self.__file_cache.get_file(
                URIRef(original_image_http_url)
            )
        except HTTPError as http_error:
            if http_error.code == 404:
                raise self.CacheOriginalImageException(
                    f"original image {original_image_http_url} not found"
                ) from http_error
            else:
                raise self.CacheOriginalImageException(
                    f"original image {original_image_http_url} could not be retrieved"
                ) from http_error
        except ValueError as e:
            raise self.CacheOriginalImageException(
                f"error caching original image {original_image_http_url}"
            ) from e

        self.__logger.debug(
            "cached original image %s at %s",
            original_image_http_url,
            original_image_file_path,
        )

        assert original_image_file_path is not None
        return original_image_file_path
