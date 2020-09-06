import json
from typing import Dict, List, Tuple
from urllib.parse import quote
from urllib.request import urlopen

from pathvalidate import sanitize_filename

from paradicms_etl._extractor import _Extractor


class AirtableExtractor(_Extractor):
    def __init__(self, *, api_key: str, base_id: str, tables: List[str], **kwds):
        _Extractor.__init__(self, **kwds)
        self.__api_key = api_key
        self.__base_id = base_id
        self.__tables = tables

    def extract(self, *, force: bool):
        records_by_table = {}
        for table in self.__tables:
            records_by_table[table] = self.__extract_table_records(
                force=force, table=table
            )
        return {"records_by_table": records_by_table}

    def __extract_table_records(self, *, force: bool, table: str) -> Tuple[Dict, ...]:
        records = []
        offset = None
        while True:
            url = (
                self.table_url(base_id=self.__base_id, table=table)
                + f"?api_key={quote(self.__api_key)}"
            )
            if offset is not None:
                url += "&offset=" + quote(offset)
            file_path = self._extracted_data_dir_path / (
                sanitize_filename(url) + ".json"
            )
            if not file_path.is_file() or force:
                self._logger.debug("downloading %s to %s", url, file_path)
                f = urlopen(url)
                try:
                    response_str = f.read()
                finally:
                    f.close()
                with open(file_path, "w+b") as file_:
                    file_.write(response_str)

            with open(file_path, "rb") as file_:
                file_json = json.load(file_)
            file_records = file_json["records"]
            self._logger.debug(
                "extracted %d records from %s (%s)", len(file_records), url, file_path
            )
            records.extend(file_records)
            offset = file_json.get("offset")
            if offset is None:
                break
        return tuple(records)

    @classmethod
    def record_url(cls, *, base_id: str, record_id: str, table: str):
        return cls.table_url(base_id=base_id, table=table) + f"/{record_id}"

    @classmethod
    def table_url(cls, *, base_id: str, table: str):
        return f"https://api.airtable.com/v0/{quote(base_id)}/{quote(table)}"
