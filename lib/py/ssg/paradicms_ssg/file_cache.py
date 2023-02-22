import json
import logging
import mimetypes
import os
from pathlib import Path
from typing import Optional
from urllib.request import urlretrieve

from pathvalidate import sanitize_filename
from rdflib import URIRef
from time import sleep


class FileCache:
    def __init__(
        self,
        *,
        cache_dir_path: Path,
        force_download: bool = False,
        sleep_s_after_download: Optional[float] = None,
    ):
        """
        :param cache_dir_path: directory where files from URLs can be cached
        :param force_download: always download files, never use cached versions
        """
        self.__cache_dir_path = cache_dir_path
        self.__cache_dir_path.mkdir(exist_ok=True, parents=True)
        self.__force_download = force_download
        self.__logger = logging.getLogger(self.__class__.__name__)
        self.__sleep_s_after_download = sleep_s_after_download

    def get_file(self, file_url: URIRef) -> Path:
        """
        Get file from the cache, downloading if necessary.
        :return path to the file in the cache directory
        """

        # Store each file in a different directory, alongside its metadata
        # The file will be <root dir path>/<sanitized version of file URL>/file.<ext>
        # The headers will be in the same directory as headers.txt.

        assert not str(file_url).startswith("file:")

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
        self.__logger.debug("downloaded %s to %s", file_url, temp_file_path)

        if self.__sleep_s_after_download is not None:
            self.__logger.debug(
                "sleeping %.2f seconds after downloading %s",
                self.__sleep_s_after_download,
                file_url,
            )
            sleep(self.__sleep_s_after_download)

        content_type = headers_dict.get("Content-Type")
        cached_file_ext = None
        if content_type:
            cached_file_ext = mimetypes.guess_extension(content_type, strict=False)
            self.__logger.debug(
                "guessed file extension %s from Content-Type %s",
                cached_file_ext,
                content_type,
            )
        else:
            self.__logger.debug("%s returned an empty Content-Type", file_url)

        if cached_file_ext is None:
            guessed_mime_type, _ = mimetypes.guess_type(file_url, strict=False)
            if guessed_mime_type is not None:
                self.__logger.debug(
                    "guessed MIME type %s from file URL %s", guessed_mime_type, file_url
                )
                cached_file_ext = mimetypes.guess_extension(
                    guessed_mime_type, strict=False
                )
                self.__logger.debug(
                    "guessed file extension %s from guessed MIME type %s",
                    cached_file_ext,
                    guessed_mime_type,
                )

        if cached_file_ext is None:
            raise ValueError(f"unable to guess file extension for {file_url}")

        self.__logger.debug(
            "%s content type = %s, file extension = %s",
            file_url,
            content_type,
            cached_file_ext,
        )

        cached_file_path = file_cache_dir_path / ("file" + cached_file_ext)
        file_cache_dir_path.mkdir(exist_ok=True)
        os.rename(temp_file_path, cached_file_path)
        self.__logger.debug(
            "moved %s (from %s) to %s", temp_file_path, file_url, cached_file_path
        )

        headers_json_file_path = file_cache_dir_path / "headers.json"
        with open(headers_json_file_path, "w+", encoding="utf-8") as headers_json_file:
            json.dump(headers_dict, headers_json_file)
            self.__logger.debug(
                "wrote %s headers to %s", file_url, headers_json_file_path
            )
        return cached_file_path
