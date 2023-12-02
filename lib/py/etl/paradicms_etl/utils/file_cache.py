import json
import logging
import mimetypes
import os
from pathlib import Path
from shutil import copyfileobj
from ssl import SSLContext
from time import sleep
from typing import Any, Dict, Optional
from urllib.request import Request, urlopen

from pathvalidate import sanitize_filename
from rdflib import URIRef


class FileCache:
    def __init__(
        self,
        *,
        # atomic_download: bool = False,
        cache_dir_path: Path,
        sleep_s_after_download: Optional[float] = None,
        ssl_context: Optional[SSLContext] = None,
    ):
        """
        :param cache_dir_path: directory where files from URLs can be cached
        """
        # self.__atomic_download = atomic_download
        self.__cache_dir_path = cache_dir_path
        self.__cache_dir_path.mkdir(exist_ok=True, parents=True)
        self.__logger = logging.getLogger(self.__class__.__name__)
        self.__sleep_s_after_download = sleep_s_after_download
        self.__ssl_context = ssl_context

    def __file_cache_dir_path(self, *, file_url: str) -> Path:
        return self.__cache_dir_path / sanitize_filename(str(file_url))

    def get_file(
        self,
        file_url: URIRef,
        *,
        file_extension: str | None = None,
        force_download=False,
    ) -> Path:
        """
        Get file from the cache, downloading if necessary.
        :return path to the file in the cache directory
        """

        # Store each file in a different directory, alongside its metadata
        # The file will be <root dir path>/<sanitized version of file URL>/file.<extension>
        # The headers will be in the same directory as headers.txt.

        assert not str(file_url).startswith("file:")

        file_cache_dir_path = self.__file_cache_dir_path(file_url=file_url)

        if not force_download and file_cache_dir_path.is_dir():
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

        def get_cached_file_path(headers_dict: dict[str, Any]) -> Path:
            if file_extension is not None:
                return file_cache_dir_path / (
                    "file"
                    + ("." if not file_extension.startswith(".") else "")
                    + file_extension
                )

            headers_dict_lower = {
                key.lower(): value for key, value in headers_dict.items()
            }
            content_type_header_value = headers_dict_lower.get("content-type")
            if content_type_header_value:
                file_mime_type = content_type_header_value.split(";", 1)[0]
            else:
                file_mime_type = None
            cached_file_extension = self.__guess_file_extension(
                file_mime_type=file_mime_type, file_url=file_url
            )
            return file_cache_dir_path / ("file" + cached_file_extension)

        # Force download or cache miss
        self.__logger.debug("downloading %s", file_url)
        # if self.__atomic_download:
        #     temp_file_path, headers = urlretrieve(str(file_url))
        #     self.__logger.debug("downloaded %s to %s", file_url, temp_file_path)
        #     headers_dict = {key: value for key, value in headers.items()}
        #     cached_file_path = get_cached_file_path(headers_dict)
        #     file_cache_dir_path.mkdir(exist_ok=True)
        #     os.rename(temp_file_path, cached_file_path)
        #     self.__logger.debug(
        #         "moved %s (from %s) to %s", temp_file_path, file_url, cached_file_path
        #     )
        # else:
        with urlopen(
            Request(
                str(file_url),
                headers={
                    "User-Agent": "paradicms/1.0.0 (https://paradicms.org; info@paradicms.org)"
                },
            ),
            context=self.__ssl_context,
        ) as open_file_url:
            open_file_headers_dict = {
                key: value for key, value in open_file_url.headers.items()
            }
            cached_file_path = get_cached_file_path(open_file_headers_dict)
            cached_file_path.unlink(missing_ok=True)
            file_cache_dir_path.mkdir(exist_ok=True, parents=True)
            with open(cached_file_path, "w+b") as cached_file:
                copyfileobj(open_file_url, cached_file)
                self.__logger.debug("downloaded %s to %s", file_url, cached_file_path)

        headers_json_file_path = file_cache_dir_path / "headers.json"
        with open(headers_json_file_path, "w+", encoding="utf-8") as headers_json_file:
            json.dump(open_file_headers_dict, headers_json_file)
            self.__logger.debug(
                "wrote %s headers to %s", file_url, headers_json_file_path
            )

        if self.__sleep_s_after_download is not None:
            self.__logger.debug(
                "sleeping %.2f seconds after downloading %s",
                self.__sleep_s_after_download,
                file_url,
            )
            sleep(self.__sleep_s_after_download)

        return cached_file_path

    def __guess_file_extension(
        self, *, file_url: str, file_mime_type: str | None
    ) -> str:
        if file_mime_type is None:
            file_mime_type, _ = mimetypes.guess_type(file_url, strict=False)
            if file_mime_type is None:
                raise ValueError(f"unable to guess MIME type for {file_url}")
            self.__logger.debug(
                "guessed MIME type %s from file URL %s", file_mime_type, file_url
            )

        guessed_file_extension = mimetypes.guess_extension(file_mime_type, strict=False)
        if guessed_file_extension is None:
            raise ValueError(
                f"unable to guess file extension for guessed MIME type {file_mime_type}"
            )

        self.__logger.debug(
            "guessed file extension %s from MIME type %s",
            guessed_file_extension,
            file_mime_type,
        )
        return guessed_file_extension

    def put_file(
        self,
        *,
        file_data: bytes,
        file_url: URIRef,
        file_mime_type: str | None = None,
        file_extension: str | None = None,
    ) -> Path:
        file_cache_dir_path = self.__file_cache_dir_path(file_url=file_url)
        if file_extension is None:
            file_extension = self.__guess_file_extension(
                file_mime_type=file_mime_type, file_url=file_url
            )
        cached_file_path = file_cache_dir_path / ("file" + file_extension)
        file_cache_dir_path.mkdir(exist_ok=True)
        with open(cached_file_path, "w+b") as cached_file:
            cached_file.write(file_data)
        return cached_file_path
