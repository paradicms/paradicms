import json
from typing import Dict, List, Tuple, Union
from urllib.parse import quote
from urllib.request import urlopen

from pathvalidate import sanitize_filename

from paradicms_etl._extractor import _Extractor


class AirtableExtractor(_Extractor):
    def __init__(
        self,
        *,
        api_key: str,
        base_id: str,
        tables: Union[List[str], Tuple[str], Dict[str, Dict[str, str]]],
        **kwds,
    ):
        """
        :param api_key: Airtable API key
        :param base_id: Airtable base identifier
        :param tables: a list or a union of table [names] or a dict where the keys are table names and the values are API query parameters
        """
        _Extractor.__init__(self, **kwds)
        self.__api_key = api_key
        self.__base_id = base_id
        if isinstance(tables, (list, tuple)):
            self.__tables = {table: {} for table in tables}
        else:
            assert isinstance(tables, dict)
            self.__tables = tables

    def extract(self, *, force: bool):
        records_by_table = {}
        for table, query_parameters in self.__tables.items():
            records_by_table[table] = self.__extract_table_records(
                force=force, table=table, query_parameters=query_parameters
            )
        return {"records_by_table": records_by_table}

    def __extract_table_records(
        self, *, force: bool, table: str, query_parameters: Dict[str, str]
    ) -> Tuple[Dict, ...]:
        records = []
        offset = None
        while True:
            request_query_parameters = query_parameters.copy()
            request_query_parameters["api_key"] = self.__api_key
            if offset is not None:
                request_query_parameters["offset"] = offset

            url = (
                self.table_url(base_id=self.__base_id, table=table)
                + "?"
                + "&".join(
                    f"{key}={quote(value)}"
                    for key, value in request_query_parameters.items()
                )
            )

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
    def table_url(cls, *, base_id: str, table: str):
        return f"https://api.airtable.com/v0/{quote(base_id)}/{quote(table)}"
