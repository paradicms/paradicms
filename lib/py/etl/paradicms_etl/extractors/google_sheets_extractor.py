from pathlib import Path
from tempfile import TemporaryDirectory
from typing import Optional

from paradicms_etl.extractors.excel_2010_extractor import Excel2010Extractor
from paradicms_etl.utils.download_file import download_file


class GoogleSheetsExtractor:
    def __init__(self, *, spreadsheet_id: str, cache_dir_path: Optional[Path] = None):
        self.__cache_dir_path = cache_dir_path
        self.__spreadsheet_id = spreadsheet_id

    def __extract(self, *, cache_dir_path: Path, force: bool):
        xlsx_file_path = cache_dir_path / (self.__spreadsheet_id + ".xlsx")
        download_file(
            force=force,
            from_url=f"https://docs.google.com/spreadsheets/u/0/d/{self.__spreadsheet_id}/export?"
            f"format=xlsx&id={self.__spreadsheet_id}",
            to_file_path=xlsx_file_path,
        )
        return Excel2010Extractor(xlsx_file_path=xlsx_file_path)()

    def __call__(self, *, force: bool, **kwds):
        if self.__cache_dir_path is not None:
            return self.__extract(cache_dir_path=self.__cache_dir_path, force=force)
        else:
            with TemporaryDirectory() as temp_dir:
                return self.__extract(cache_dir_path=Path(temp_dir), force=force)
