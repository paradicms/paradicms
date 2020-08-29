import logging
from abc import ABC, abstractmethod
from pathlib import Path
from typing import Dict, Optional
from urllib.request import urlopen

from pathvalidate import sanitize_filename

from paradicms_etl._pipeline_phase import _PipelinePhase


class _Extractor(_PipelinePhase):
    def __init__(
        self,
        *,
        data_dir_path: Optional[Path] = None,
        extracted_data_dir_path: Optional[Path] = None,
        **kwds
    ):
        """
        Construct an extractor.

        If extracted_data_dir_path is specified, use it for the extractor's outputs.
        If data_dir_path is specified, use data_dir_path / pipeline_id / "extracted".
        If neither is specified, use the default data_dir_path in the repository / pipeline_id / "extracted".
        """

        _PipelinePhase.__init__(self, **kwds)
        if extracted_data_dir_path is None:
            if data_dir_path is None:
                raise ValueError(
                    "must specify extracted_data_dir_path or data_dir_path"
                )
            extracted_data_dir_path = data_dir_path / self._pipeline_id / "extracted"
        self.__extracted_data_dir_path = extracted_data_dir_path

    def _download(self, from_url: str, force: bool) -> Path:
        """
        Utility method to download a file from a URL to a local file path.
        """
        file_path = self._extracted_data_dir_path / sanitize_filename(from_url)
        if not force and file_path.exists():
            self._logger.info(
                "%s already downloaded to %s and force not specified, skipping download",
                from_url,
                file_path,
            )
            return file_path

        self._logger.info("downloading %s to %s", from_url, file_path)
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
    def extract(self, *, force: bool) -> Optional[Dict[str, object]]:
        """
        Extract data from a source.
        :param force: force extraction, ignoring any cached data
        :return a **kwds dictionary to merge with kwds to pass to transformer
        """

    @property
    def _extracted_data_dir_path(self) -> Path:
        """
        Directory to use to store extracted data.
        The directory is created on demand when this method is called.
        Paths into this directory can be passed to the transformer via the kwds return from extract.
        """

        self.__extracted_data_dir_path.mkdir(parents=True, exist_ok=True)
        return self.__extracted_data_dir_path
