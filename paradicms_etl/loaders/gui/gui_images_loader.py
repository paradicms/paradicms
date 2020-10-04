import dataclasses
from typing import Generator, Tuple

from pathvalidate import sanitize_filename

from paradicms_etl._image_archiver import _ImageArchiver
from paradicms_etl._loader import _Loader
from paradicms_etl.file_cache import FileCache
from paradicms_etl.models._image import _Image
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.utils import thumbnail_image


class GuiImagesLoader(_Loader):
    def __init__(
        self,
        *,
        image_archiver: _ImageArchiver,
        thumbnail_dimensions: Tuple[ImageDimensions, ...] = (
            ImageDimensions(height=200, width=200),
            ImageDimensions(height=600, width=600),
        ),
        **kwds,
    ):
        _Loader.__init__(self, **kwds)

        self.__image_archiver = image_archiver

        self.__original_image_file_cache = FileCache(
            cache_dir_path=self._loaded_data_dir_path / "original_image_cache"
        )

        self.__thumbnail_dimensions = thumbnail_dimensions
        if self.__thumbnail_dimensions:
            self.__thumbnail_cache_dir_path = (
                self._loaded_data_dir_path / "thumbnail_cache"
            )
            self.__thumbnail_cache_dir_path.mkdir(exist_ok=True)
        else:
            self.__thumbnail_cache_dir_path = None

    def load(self, *, models) -> Generator[_Image, None, None]:
        """
        Archive an original image and its thumbnails.
        :return a generator of (1) a copy of image with the archived image URL and (2) new Images for the thumbnails
        """

        for model in models:
            if not isinstance(model, _Image):
                raise TypeError("model is not an _Image subclass: " + type(model))

            image = model

            if image.original_image_uri is not None:
                raise ValueError(
                    f"non-original images should not be archived: {image.uri}"
                )

            original_image = image

            original_image_file_path = self.__original_image_file_cache.get_file(
                original_image.uri
            )
            self._logger.debug(
                "cached original image %s at %s",
                original_image.uri,
                original_image_file_path,
            )
            archived_original_image_url = self.__image_archiver.archive_image(
                image_file_path=original_image_file_path
            )
            self._logger.debug(
                "cached original image %s to %s",
                original_image.uri,
                archived_original_image_url,
            )

            yield dataclasses.replace(original_image, uri=archived_original_image_url)

            if not self.__thumbnail_dimensions:
                continue

            thumbnail_dir_path = self.__thumbnail_cache_dir_path / sanitize_filename(
                str(original_image.uri)
            )
            thumbnail_dir_path.mkdir(parents=True, exist_ok=True)

            for thumbnail_dimensions in self.__thumbnail_dimensions:
                thumbnail_file_path = (
                    thumbnail_dir_path
                    / f"{thumbnail_dimensions.width}x{thumbnail_dimensions.height}"
                )

                thumbnail_image(
                    input_image_file_path=original_image_file_path,
                    output_thumbnail_dimensions=thumbnail_dimensions,
                    output_thumbnail_file_path=thumbnail_file_path,
                )

                archived_thumbnail_url = self.__image_archiver.archive_image(
                    image_file_path=thumbnail_file_path
                )

                yield dataclasses.replace(
                    original_image,
                    exact_dimensions=thumbnail_dimensions,
                    max_dimensions=None,
                    original_image_uri=archived_original_image_url,
                    uri=archived_thumbnail_url,
                )
