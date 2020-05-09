import os.path
from pathlib import Path

from paradicms_etl.pipeline._extractor import _Extractor


class ExistingCsvFileExtractor(_Extractor):
    def __init__(self, csv_file_path: Path):
        self.__csv_file_path = csv_file_path

    def extract(self, **kwds):
        if not os.path.isfile(self.__csv_file_path):
            raise ValueError(str(self.__csv_file_path) + " does not exist")
        return {"csv_file_path": self.__csv_file_path}
