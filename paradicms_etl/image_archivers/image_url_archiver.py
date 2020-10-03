import logging
from abc import ABC, abstractmethod
from pathlib import Path
from typing import Optional
from urllib.request import urlretrieve

from pathvalidate import sanitize_filename
from rdflib import URIRef

from paradicms_etl._image_archiver import _ImageArchiver
from paradicms_etl.image_archivers._image_file_archiver import _ImageFileArchiver


class ImageUrlArchiver(_ImageArchiver):
    def __init__(
        self,
        *,
        cache_dir_path: Path,
        image_file_archiver: _ImageFileArchiver,
        force_download: bool = False
    ):
        """
        :param cache_dir_path: directory where images from URLs can be cached
        """
        _ImageArchiver.__init__(self)
        self.__cache_dir_path = cache_dir_path
        self.__force_download = force_download
        self.__image_file_archiver = image_file_archiver

    def archive_image(self, *, image_url: URIRef) -> URIRef:
        """
        Archive an image hosted at the given URL.
        :param force: always download the image, don't use a cached version
        :return URL of the archived image
        """

        cached_file_path = self.__cache_dir_path / sanitize_filename(str(image_url))
        if self.__force_download or not cached_file_path.is_file():
            self._logger.debug("downloading %s to %s", image_url, cached_file_path)
            urlretrieve(str(image_url), str(cached_file_path))
            self._logger.debug("downloaded %s to %s", image_url, cached_file_path)
        else:
            self._logger.debug(
                "cached file %s exists for URL %s and force_download not specified, using cached data",
                cached_file_path,
                image_url,
            )

        archived_image_url = self.__image_file_archiver.archive_image(
            image_file_path=cached_file_path
        )
        self._logger.debug(
            "archived URL %s to URL %s", str(image_url), archived_image_url
        )
        return archived_image_url
