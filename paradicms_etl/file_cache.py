import logging
from pathlib import Path
from urllib.request import urlretrieve

from pathvalidate import sanitize_filename
from rdflib import URIRef


class FileCache:
    def __init__(self, *, cache_dir_path: Path, force_download: bool = False):
        """
        :param cache_dir_path: directory where files from URLs can be cached
        :param force_download: always download files, never use cached versions
        """
        self.__cache_dir_path = cache_dir_path
        self.__force_download = force_download
        self.__logger = logging.getLogger(self.__class__.__name__)

    def get_file(self, file_url: URIRef) -> Path:
        """
        Get image from the cache, downloading if necessary.
        :return path to the image in the cache directory
        """

        cached_file_path = self.__cache_dir_path / sanitize_filename(str(file_url))
        if self.__force_download or not cached_file_path.is_file():
            self.__logger.debug("downloading %s to %s", file_url, cached_file_path)
            urlretrieve(str(file_url), str(cached_file_path))
            self.__logger.debug("downloaded %s to %s", file_url, cached_file_path)
        else:
            self.__logger.debug(
                "cached file %s exists for URL %s and force_download not specified, using cached data",
                cached_file_path,
                file_url,
            )
        return cached_file_path
