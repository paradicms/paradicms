import json
import logging
from pathlib import Path
from typing import Dict, List, Tuple, Union
from urllib.parse import quote
from urllib.request import urlopen, Request

from pathvalidate import sanitize_filename


class AirtableExtractor:
    """
    Extractor for an Airtable (https://airtable.com/) base.
    """

    def __init__(
        self,
        *,
        access_token: str,
        base_id: str,
        extracted_data_dir_path: Path,
        tables: Union[List[str], Tuple[str, ...], Dict[str, Dict[str, str]]],
    ):
        """
        :param access_token: Airtable API key
        :param base_id: Airtable base identifier
        :param tables: a list or a union of table [names] or a dict where the keys are table names and the values are API query parameters
        """
        self.__access_token = access_token
        self.__base_id = base_id
        self.__extracted_data_dir_path = extracted_data_dir_path
        self.__logger = logging.getLogger(__name__)
        if isinstance(tables, (list, tuple)):
            self.__tables: Dict[str, Dict[str, str]] = {table: {} for table in tables}
        else:
            assert isinstance(tables, dict)
            self.__tables = tables

    def __call__(self, *, force: bool, **kwds):
        records_by_table = {}
        self.__extracted_data_dir_path.mkdir(parents=True, exist_ok=True)
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

            file_path = self.__extracted_data_dir_path / (
                str(sanitize_filename(url)) + ".json"
            )
            if not file_path.is_file() or force:
                self.__logger.debug("downloading %s to %s", url, file_path)
                f = urlopen(
                    Request(
                        url, headers={"Authorization": "Bearer " + self.__access_token}
                    )
                )
                try:
                    response_str = f.read()
                finally:
                    f.close()
                with open(file_path, "w+b") as file_:
                    file_.write(response_str)

            with open(file_path, "rb") as file_:
                file_json = json.load(file_)
            file_records = file_json["records"]
            self.__logger.debug(
                "extracted %d records from %s (%s)", len(file_records), url, file_path
            )
            records.extend(file_records)
            offset = file_json.get("offset")
            if offset is None:
                break
        return tuple(records)

    @classmethod
    def record_url(self, *, base_id, record_id: str, table: str):
        return (
            AirtableExtractor.table_url(base_id=base_id, table=table) + f"/{record_id}"
        )

    @classmethod
    def table_url(cls, *, base_id: str, table: str):
        return f"https://api.airtable.com/v0/{quote(base_id)}/{quote(table)}"
