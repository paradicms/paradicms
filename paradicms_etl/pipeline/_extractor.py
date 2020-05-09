import logging
from abc import ABC, abstractmethod
from pathlib import Path
from typing import Dict, Optional
from urllib.request import urlopen

from paradicms_etl.pipeline.pipeline_storage import PipelineStorage
from pathvalidate import sanitize_filename


class _Extractor(ABC):
    def __init__(self):
        self._logger = logging.getLogger(self.__class__.__name__)

    def _download(self, from_url: str, force: bool, storage: PipelineStorage) -> Path:
        """
        Utility method to download a file from a URL to a local file path.
        """
        file_path = storage.extracted_data_dir_path / sanitize_filename(from_url)
        if not force and file_path.exists():
            self._logger.info(
                "%s already download and force not specified, skipping download",
                from_url)
            return file_path

        self._logger.info("downloading %s to %s", from_url)
        try:
            url_ = urlopen(from_url)
            url_contents = url_.read()
        finally:
            url_.close()
        with open(file_path, "w+b") as file_:
            file_.write(url_contents)
        self._logger.info("downloaded %s", from_url)
        return file_path

    @abstractmethod
    def extract(self, *, force: bool, storage: PipelineStorage) -> Optional[Dict[str, object]]:
        """
        Extract data from a source.
        :param force: force extraction, ignoring any cached data
        :return a **kwds dictionary to merge with kwds to pass to transformer
        """
