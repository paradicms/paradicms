import json
import logging
from pathlib import Path
from shutil import rmtree
from typing import Dict, List, Tuple, Union, Any, Optional
from urllib.error import HTTPError
from urllib.parse import quote
from urllib.request import urlopen, Request

from pathvalidate import sanitize_filename
from rdflib import URIRef

from paradicms_etl.utils.file_cache import FileCache


class AirtableExtractor:
    """
    Extractor for an Airtable (https://airtable.com/) base.
    """

    _AIRTABLE_API_BASE_URL = "https://api.airtable.com/v0"
    __IMAGE_KEYs = ("id", "width", "height", "url", "size", "type")

    def __init__(
        self,
        *,
        access_token: str,
        base_id: str,
        cache_dir_path: Path,
        tables: Union[List[str], Tuple[str, ...], Dict[str, Dict[str, str]]],
    ):
        """
        :param access_token: Airtable API key
        :param base_id: Airtable base identifier
        :param tables: a list or a union of table [names] or a dict where the keys are table names and the values are API query parameters
        """
        if not access_token:
            raise ValueError("empty Airtable access token")
        self.__access_token = access_token
        if not base_id:
            raise ValueError("empty Airtable base id")
        self.__base_id = base_id
        self.__cache_dir_path = cache_dir_path
        self.__image_file_cache = FileCache(cache_dir_path=cache_dir_path / "images")
        self.__logger = logging.getLogger(__name__)
        if isinstance(tables, (list, tuple)):
            self.__tables: Dict[str, Dict[str, str]] = {table: {} for table in tables}
        else:
            assert isinstance(tables, dict)
            self.__tables = tables

    @classmethod
    def base_url(cls, *, base_id: str):
        return f"{cls._AIRTABLE_API_BASE_URL}/{quote(base_id)}"

    def __call__(self, *, force: bool, **kwds):
        base = self.__extract_base_metadata(base_id=self.__base_id, force=force)

        records_by_table = {}
        if force:
            rmtree(self.__cache_dir_path, ignore_errors=True)
        self.__cache_dir_path.mkdir(parents=True, exist_ok=True)
        for table, query_parameters in self.__tables.items():
            table_records = self.__extract_table_records(
                force=force, table=table, query_parameters=query_parameters
            )
            records_by_table[table] = table_records
            for table_record in table_records:
                self.__cache_record_images(table_record)

        return {
            "base": base,
            "records_by_table": records_by_table,
        }

    def __cache_record_images(self, record) -> None:
        """
        Cache any images in a record to the local file system. Records are modified to include the file URL.
        """
        for field_key, list_field_value in record["fields"].items():
            if isinstance(list_field_value, list):
                field_values = list_field_value
            else:
                field_values = [list_field_value]

            for list_field_value in field_values:
                if not isinstance(list_field_value, dict):
                    break
                if not all(
                    image_key in list_field_value for image_key in self.__IMAGE_KEYs
                ):
                    break
                list_field_value["cached_file_path"] = str(
                    self.__image_file_cache.get_file(URIRef(list_field_value["url"]))
                )
                self.__logger.debug(
                    "cached %s as %s",
                    list_field_value["url"],
                    list_field_value["cached_file_path"],
                )

    def __extract_base_metadata(self, *, base_id: str, force: bool) -> Dict[str, Any]:
        base_ids = []
        offset = None
        while True:
            json_ = self.__get_airtable_api_json(
                force=force,
                query_parameters={"offset": str(offset)}
                if offset is not None
                else None,
                url_path="/meta/bases",
            )

            bases_json = json_["bases"]
            self.__logger.debug("extracted %d bases", len(bases_json))
            for base in bases_json:
                if base["id"] == base_id:
                    return base
                base_ids.append(base["id"])
            offset = json_.get("offset")
            if offset is None:
                break
        raise ValueError(
            f"base {base_id} not found in base metadata {' '.join(base_ids)}"
        )

    def __extract_table_records(
        self, *, force: bool, table: str, query_parameters: Dict[str, str]
    ) -> Tuple[Dict, ...]:
        records = []
        offset = None
        while True:
            json_ = self.__get_airtable_api_json(
                force=force,
                query_parameters={"offset": str(offset)}
                if offset is not None
                else None,
                url_path=self._table_url_path(base_id=self.__base_id, table=table),
            )

            records_json = json_["records"]
            self.__logger.debug("extracted %d records", len(records_json))
            records.extend(records_json)
            offset = json_.get("offset")
            if offset is None:
                break
        return tuple(records)

    def __get_airtable_api_json(
        self,
        *,
        force: bool,
        url_path: str,
        query_parameters: Optional[Dict[str, str]] = None,
    ) -> Any:
        """
        Get JSON from an Airtable API URL.

        Unless force is specified, reuse cached data if it already exists.
        Otherwise download new data and cache it.
        """

        url = self._AIRTABLE_API_BASE_URL + url_path
        if query_parameters:
            url += "?" + "&".join(
                f"{key}={quote(value)}" for key, value in query_parameters.items()
            )

        file_path = self.__cache_dir_path / (str(sanitize_filename(url)) + ".json")

        if file_path.is_file() and not force:
            with open(file_path, "rb") as file_:
                return json.load(file_)

        self.__logger.debug("downloading %s to %s", url, file_path)
        try:
            with urlopen(
                Request(url, headers={"Authorization": "Bearer " + self.__access_token})
            ) as f:
                response_str = f.read()
        except HTTPError as e:
            self.__logger.warning(
                "HTTP error with full response:\n%s", e.read(), exc_info=True
            )
            raise

        file_path.parent.mkdir(parents=True, exist_ok=True)
        with open(file_path, "w+b") as file_:
            file_.write(response_str)
        return json.loads(response_str)

    @classmethod
    def record_url(cls, *, base_id: str, record_id: str, table: str):
        return f"{cls.table_url(base_id=base_id, table=table)}/{record_id}"

    @classmethod
    def table_url(cls, *, base_id: str, table: str):
        return f"{cls._AIRTABLE_API_BASE_URL}{cls._table_url_path(base_id=base_id, table=table)}"

    @classmethod
    def _table_url_path(cls, *, base_id: str, table: str):
        return f"/{quote(base_id)}/{quote(table)}"
