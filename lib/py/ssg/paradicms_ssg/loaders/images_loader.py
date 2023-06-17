import logging
import os.path
from pathlib import Path
from typing import Generator, Optional, Tuple
from urllib.parse import quote

from pathvalidate import sanitize_filename
from rdflib import URIRef
from tqdm import tqdm

from paradicms_etl.models.cms.cms_image import CmsImage
from paradicms_etl.models.image import Image
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_ssg.image_archiver import ImageArchiver
from paradicms_ssg.original_image_file_cache import (
    OriginalImageFileCache,
)
from paradicms_ssg.utils.thumbnail_image import thumbnail_image


class ImagesLoader:
    """
    Loader that:
    - Thumbnails images
    - Archives original images and thumbnails

    Separated from AppLoader for modularity and testability.
    """

    class __ArchiveThumbnailImagesException(Exception):
        pass

    THUMBNAIL_MAX_DIMENSIONS_DEFAULT = (
        ImageDimensions(height=200, width=200),
        ImageDimensions(height=400, width=400),
        ImageDimensions(height=600, width=600),
        ImageDimensions(height=800, width=800),
    )

    def __init__(
        self,
        *,
        loaded_data_dir_path: Path,
        image_archiver: ImageArchiver,
        sleep_s_after_image_download: Optional[float] = None,
        thumbnail_max_dimensions: Tuple[
            ImageDimensions, ...
        ] = THUMBNAIL_MAX_DIMENSIONS_DEFAULT,
    ):
        self.__image_archiver = image_archiver
        self.__logger = logging.getLogger(__name__)

        self.__original_image_file_cache = OriginalImageFileCache(
            cache_dir_path=loaded_data_dir_path / "original_image_cache",
            sleep_s_after_download=sleep_s_after_image_download,
        )

        if not thumbnail_max_dimensions:
            thumbnail_max_dimensions = self.THUMBNAIL_MAX_DIMENSIONS_DEFAULT
        self.__thumbnail_max_dimensions = thumbnail_max_dimensions
        self.__thumbnail_cache_dir_path = loaded_data_dir_path / "thumbnail_cache"
        self.__thumbnail_cache_dir_path.mkdir(exist_ok=True)

    def __archive_original_image(
        self, *, original_image: Image, original_image_file_path: Path
    ) -> Image:
        archived_original_image_url = self.__image_archiver(
            image_file_path=original_image_file_path
        )
        assert archived_original_image_url
        # The original image retains its URI but gets a new src
        return original_image.replacer().set_src(archived_original_image_url).build()

    def __archive_thumbnail_images(
        self,
        *,
        original_image: Image,
        original_image_file_path: Path,
    ) -> Tuple[Image, ...]:
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
                raise self.__ArchiveThumbnailImagesException(
                    f"error thumbnailing {original_image_file_path} (from {original_image.uri})"
                ) from e

            archived_thumbnail_src = self.__image_archiver(
                image_file_path=thumbnail_file_path
            )
            assert archived_thumbnail_src

            # Thumbnails are different Images, so they need new URIs in addition to their own src.
            # The archiver may return a relative path rather than a full URI, so we have to synthesize a URI.
            # We could use the UUID URI scheme as an easy out, but it wouldn't be deterministic.
            # Tacking on a fragment or similar to an arbitrary original_image.uri is also dicey.
            archived_thumbnail_uri = URIRef(
                f"urn:paradicms_etl:thumbnail:{quote(str(original_image.uri))}:{thumbnail_max_dimensions.width}x{thumbnail_max_dimensions.height}"
            )

            archived_thumbnail_images.append(
                CmsImage.builder(
                    uri=archived_thumbnail_uri,
                )
                .copy_rights(original_image)
                .set_exact_dimensions(thumbnail_exact_dimensions)
                .set_max_dimensions(thumbnail_max_dimensions)
                .set_original_image_uri(original_image.uri)
                .set_src(archived_thumbnail_src)
                .build()
            )
        assert len(archived_thumbnail_images) == len(self.__thumbnail_max_dimensions)
        return tuple(archived_thumbnail_images)

    def __call__(self, *, models, **kwds) -> Generator[Image, None, None]:
        """
        Archive an original image and its thumbnails.
        :return a generator of (1) a copy of image with the archived image URL and (2) new Images for the thumbnails
        """

        self.__logger.info("loading GUI images")
        for model in tqdm(models):
            if not isinstance(model, Image):
                raise TypeError("model is not an Image: " + type(model))

            original_image = model

            if original_image.original_image_uri is not None:
                raise ValueError(
                    f"non-original images should not be archived: {original_image.uri}"
                )

            try:
                original_image_file_path = (
                    self.__original_image_file_cache.cache_original_image(
                        original_image
                    )
                )
                assert original_image_file_path
            except OriginalImageFileCache.CacheOriginalImageException:
                self.__logger.info(
                    "unable to cache original image %s, dropping image from GUI",
                    original_image.uri,
                    exc_info=True,
                )
                continue

            # Archive the original image and thumbnails of it
            # If we can't get through the whole process, then ignore this image entirely
            archived_images = []

            # try:
            archived_original_image = self.__archive_original_image(
                original_image=original_image,
                original_image_file_path=original_image_file_path,
            )
            # except self.__Exception:
            #     self.__logger.info(
            #         "unable to archive original image %s, dropping image from GUI",
            #         original_image.uri,
            #         exc_info=True,
            #     )
            #     continue
            assert archived_original_image

            archived_images.append(archived_original_image)

            try:
                archived_thumbnail_images = self.__archive_thumbnail_images(
                    original_image=original_image,
                    original_image_file_path=original_image_file_path,
                )
            except self.__ArchiveThumbnailImagesException:
                self.__logger.info(
                    "unable to thumbnail original image %s, dropping image from GUI",
                    original_image.uri,
                    exc_info=True,
                )
                continue
            archived_images.extend(archived_thumbnail_images)

            self.__logger.debug(
                "archived %d images (1 original, %d thumbnails) from %s",
                len(archived_images),
                len(archived_images) - 1,
                original_image.uri,
            )

            yield from archived_images

        self.__logger.info("loaded GUI images")
