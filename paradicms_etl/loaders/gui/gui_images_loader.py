import dataclasses
from pathlib import Path, PurePath, PureWindowsPath
from typing import Generator, Optional, Tuple
from urllib.error import HTTPError
import os.path
from urllib.parse import unquote, urlparse

from rdflib import URIRef
from tqdm import tqdm

from pathvalidate import sanitize_filename

from paradicms_etl._image_archiver import _ImageArchiver
from paradicms_etl._loader import _Loader
from paradicms_etl.file_cache import FileCache
from paradicms_etl.models._image import _Image
from paradicms_etl.models.image import Image
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.utils import thumbnail_image


class GuiImagesLoader(_Loader):
    class __Exception(Exception):
        pass

    THUMBNAIL_MAX_DIMENSIONS_DEFAULT = (
        ImageDimensions(height=200, width=200),
        ImageDimensions(height=600, width=600),
    )

    def __init__(
        self,
        *,
        image_archiver: _ImageArchiver,
        sleep_s_after_image_download: Optional[float] = None,
        thumbnail_max_dimensions: Tuple[
            ImageDimensions, ...
        ] = THUMBNAIL_MAX_DIMENSIONS_DEFAULT,
        **kwds,
    ):
        _Loader.__init__(self, **kwds)

        self.__image_archiver = image_archiver

        self.__original_image_file_cache = FileCache(
            cache_dir_path=self._loaded_data_dir_path / "original_image_cache",
            sleep_s_after_download=sleep_s_after_image_download,
        )

        if not thumbnail_max_dimensions:
            raise ValueError("must specify thumbnail max dimensions")
        self.__thumbnail_max_dimensions = thumbnail_max_dimensions
        self.__thumbnail_cache_dir_path = self._loaded_data_dir_path / "thumbnail_cache"
        self.__thumbnail_cache_dir_path.mkdir(exist_ok=True)

    def __archive_original_image(
        self, *, original_image: Image, original_image_file_path: Path
    ) -> Image:
        archived_original_image_url = self.__image_archiver.archive_image(
            image_file_path=original_image_file_path
        )
        assert archived_original_image_url
        return dataclasses.replace(original_image, uri=archived_original_image_url)

    def __archive_thumbnail_images(
        self,
        *,
        archived_original_image: Image,
        original_image: Image,
        original_image_file_path: Path,
    ) -> Optional[Tuple[Image, ...]]:
        if not self.__thumbnail_max_dimensions:
            return ()

        archived_thumbnail_images = []

        thumbnail_dir_path = self.__thumbnail_cache_dir_path / sanitize_filename(
            str(original_image.uri)
        )
        thumbnail_dir_path.mkdir(parents=True, exist_ok=True)

        image_file_ext = os.path.splitext(original_image_file_path)[1]
        assert image_file_ext

        for thumbnail_max_dimensions in self.__thumbnail_max_dimensions:
            thumbnail_file_path = (
                thumbnail_dir_path
                / f"{thumbnail_max_dimensions.width}x{thumbnail_max_dimensions.height}{image_file_ext}"
            )

            try:
                thumbnail_exact_dimensions = thumbnail_image(
                    input_image_file_path=original_image_file_path,
                    output_thumbnail_max_dimensions=thumbnail_max_dimensions,
                    output_thumbnail_file_path=thumbnail_file_path,
                )
            except OSError as e:
                raise self.__Exception(
                    f"error thumbnailing {original_image_file_path} (from {original_image.uri})"
                ) from e

            archived_thumbnail_url = self.__image_archiver.archive_image(
                image_file_path=thumbnail_file_path
            )
            assert archived_thumbnail_url

            archived_thumbnail_images.append(
                dataclasses.replace(
                    original_image,
                    exact_dimensions=thumbnail_exact_dimensions,
                    max_dimensions=thumbnail_max_dimensions,
                    original_image_uri=archived_original_image.uri,
                    uri=archived_thumbnail_url,
                )
            )
        assert len(archived_thumbnail_images) == len(self.__thumbnail_max_dimensions)
        return tuple(archived_thumbnail_images)

    def __cache_original_image(self, original_image: Image) -> Optional[Path]:
        original_image_uri_parsed = urlparse(str(original_image.uri))
        if original_image_uri_parsed.scheme == "file":
            original_image_file_path = unquote(original_image_uri_parsed.path)
            if isinstance(
                PurePath(), PureWindowsPath
            ) and original_image_file_path.startswith("/"):
                original_image_file_path = PurePath(original_image_file_path[1:])
            else:
                original_image_file_path = PurePath(original_image_file_path)

            self._logger.debug(
                "using original image %s at %s",
                original_image.uri,
                original_image_file_path,
            )
        else:
            try:
                original_image_file_path = self.__original_image_file_cache.get_file(
                    original_image.uri
                )
            except HTTPError as http_error:
                if http_error.code == 404:
                    raise self.__Exception(
                        f"original image {original_image.uri} not found"
                    ) from http_error
                else:
                    raise self.__Exception(
                        f"original image {original_image.uri} could not be retrieved"
                    ) from http_error
            except ValueError as e:
                raise self.__Exception(
                    f"error caching original image {original_image.uri}"
                ) from e

            self._logger.debug(
                "cached original image %s at %s",
                original_image.uri,
                original_image_file_path,
            )

        return original_image_file_path

    def load(self, *, models) -> Generator[_Image, None, None]:
        """
        Archive an original image and its thumbnails.
        :return a generator of (1) a copy of image with the archived image URL and (2) new Images for the thumbnails
        """

        self._logger.info("loading GUI images")
        for model in tqdm(models):
            if not isinstance(model, _Image):
                raise TypeError("model is not an _Image subclass: " + type(model))

            original_image = model

            if original_image.original_image_uri is not None:
                raise ValueError(
                    f"non-original images should not be archived: {original_image.uri}"
                )

            try:
                original_image_file_path = self.__cache_original_image(original_image)
            except self.__Exception:
                self._logger.info(
                    "unable to cache original image %s, dropping image from GUI",
                    original_image.uri,
                    exc_info=True,
                )
                continue
            assert original_image_file_path

            # Archive the original image and thumbnails of it
            # If we can't get through the whole process, then ignore this image entirely
            archived_images = []

            try:
                archived_original_image = self.__archive_original_image(
                    original_image=original_image,
                    original_image_file_path=original_image_file_path,
                )
            except self.__Exception:
                self._logger.info(
                    "unable to archive original image %s, dropping image from GUI",
                    original_image.uri,
                    exc_info=True,
                )
                continue
            assert archived_original_image

            archived_images.append(archived_original_image)

            try:
                archived_thumbnail_images = self.__archive_thumbnail_images(
                    archived_original_image=archived_original_image,
                    original_image=original_image,
                    original_image_file_path=original_image_file_path,
                )
            except self.__Exception:
                self._logger.info(
                    "unable to thumbnail original image %s, dropping image from GUI",
                    original_image.uri,
                    exc_info=True,
                )
                continue
            archived_images.extend(archived_thumbnail_images)

            self._logger.debug(
                "archived %d images (1 original, %d thumbnails) from %s",
                len(archived_images),
                len(archived_images) - 1,
                original_image.uri,
            )

            yield from archived_images

        self._logger.info("loaded GUI images")
