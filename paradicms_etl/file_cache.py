import json
import logging
import mimetypes
import os
from http.client import HTTPMessage
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
        self.__cache_dir_path.mkdir(exist_ok=True)
        self.__force_download = force_download
        self.__logger = logging.getLogger(self.__class__.__name__)

    def get_file(self, file_url: URIRef) -> Path:
        """
        Get file from the cache, downloading if necessary.
        :return path to the file in the cache directory
        """

        # Store each file in a different directory, alongside its metadata
        # The file will be <root dir path>/<sanitized version of file URL>/file.<ext>
        # The headers will be in the same directory as headers.txt.

        file_cache_dir_path = self.__cache_dir_path / sanitize_filename(str(file_url))

        if not self.__force_download and file_cache_dir_path.is_dir():
            for file_name in os.listdir(file_cache_dir_path):
                cached_file_path = file_cache_dir_path / file_name
                if not cached_file_path.is_file():
                    continue
                file_base_name = os.path.splitext(file_name)[0]
                if file_base_name == "file":
                    # Cache hit
                    self.__logger.debug(
                        "cached file %s exists for URL %s and force_download not specified, using cached data",
                        cached_file_path,
                        file_url,
                    )
                    return cached_file_path

        # Force download or cache miss
        self.__logger.debug("downloading %s", file_url)
        temp_file_path, headers = urlretrieve(str(file_url))
        headers_dict = {key: value for key, value in headers.items()}

        content_type = headers_dict["Content-Type"]
        cached_file_ext = mimetypes.guess_extension(content_type, strict=False)
        if cached_file_ext is None:
            raise ValueError(
                f"unable to guess file extension from Content-Type {content_type}"
            )

        cached_file_path = file_cache_dir_path / ("file" + cached_file_ext)
        file_cache_dir_path.mkdir(exist_ok=True)
        os.rename(temp_file_path, cached_file_path)
        self.__logger.debug("downloaded %s to %s", file_url, cached_file_path)

        headers_json_file_path = file_cache_dir_path / "headers.json"
        with open(headers_json_file_path, "w+", encoding="utf-8") as headers_json_file:
            json.dump(headers_dict, headers_json_file)
            self.__logger.debug(
                "wrote %s headers to %s", file_url, headers_json_file_path
            )
        return cached_file_path
