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


class ImageFileCache:
    """
    File-backed cache for original Images (i.e., Images with image_uri=None), retrieved from an external URI.

    Separated from AppLoader for modularity and testability.
    """

    class ImageFileCacheException(Exception):
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

    def cache_image(self, image: Image) -> Path:
        """
        Cache an Image.

        :return: path to the cached image file
        :raise ImageFileCacheException if there was an error retrieving the original image
        """

        # Prefer .src over .uri
        for image_src in (image.src, image.uri):
            if image_src is None:
                continue

            if isinstance(image_src, ImageData):
                return self.__cache_image_from_data(
                    image=image,
                    image_data=image_src,
                )
            elif isinstance(image_src, (str, URIRef)):
                check_image_url_parsed = urlparse(str(image_src))
                if check_image_url_parsed.scheme == "file":
                    return self.__cache_image_from_file_url(
                        image_file_url=image_src,
                        image_file_url_parsed=check_image_url_parsed,
                    )
                elif check_image_url_parsed.scheme in ("http", "https"):
                    return self.__cache_image_from_http_url(image_http_url=image_src)
                else:
                    self.__logger.debug(
                        "original image URL %s for original image %s has an unknown scheme",
                        image_src,
                        image.uri,
                    )
            else:
                raise NotImplementedError(f"unknown image .src type: {type(image_src)}")

        raise self.ImageFileCacheException("image has unrecognized URL scheme(s)")

    def __cache_image_from_data(self, *, image: Image, image_data: ImageData) -> Path:
        pil_image = image_data.to_pil_image()
        pil_image_buffer = BytesIO()
        pil_image.save(pil_image_buffer, format="JPEG")
        return self.__file_cache.put_file(
            file_data=pil_image_buffer.getvalue(),
            file_mime_type="image/jpeg",
            file_url=image.uri,
        )

    def __cache_image_from_file_url(
        self,
        *,
        image_file_url: str,
        image_file_url_parsed: ParseResult,
    ) -> Path:
        image_file_path_str = unquote(image_file_url_parsed.path)
        if isinstance(PurePath(), PureWindowsPath) and image_file_path_str.startswith(
            "/"
        ):
            image_file_path = PurePath(image_file_path_str[1:])
        else:
            image_file_path = PurePath(image_file_path_str)

        if not os.path.isfile(image_file_path):
            raise self.ImageFileCacheException(f"image {image_file_url} not found")

        self.__logger.debug(
            "using image %s at %s",
            image_file_url,
            image_file_path,
        )

        assert image_file_path is not None
        return Path(image_file_path)

    def __cache_image_from_http_url(self, image_http_url: str) -> Path:
        try:
            image_file_path = self.__file_cache.get_file(URIRef(image_http_url))
        except HTTPError as http_error:
            if http_error.code == 404:
                raise self.ImageFileCacheException(
                    f"image {image_http_url} not found"
                ) from http_error
            else:
                raise self.ImageFileCacheException(
                    f"image {image_http_url} could not be retrieved"
                ) from http_error
        except ValueError as e:
            raise self.ImageFileCacheException(
                f"error caching image {image_http_url}"
            ) from e

        self.__logger.debug(
            "cached image %s at %s",
            image_http_url,
            image_file_path,
        )

        assert image_file_path is not None
        return image_file_path
