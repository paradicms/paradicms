import json
from pathlib import Path
from urllib.parse import urlencode, quote

from paradicms_etl.utils.download_file import download_file


class LunaExtractor:
    """
    Extractor for LUNA Digital Asset Management (http://www.lunaimaging.com/) software installations on the web.
    """

    def __init__(self, *, base_url: str, extracted_data_dir_path: Path, query):
        """
        :param base_url: base URL of the Luna installation e.g., http://example.com; /luna/servlet will be appended to this
        :param query: query for the LUNA search API, either a mapping object or a sequence of two-element tuples, which may contain str or bytes objects
        """

        self.__base_url = base_url
        self.__extracted_data_dir_path = extracted_data_dir_path
        self.__query = query

    @classmethod
    def create_search_url(cls, *, base_url: str, query):
        """
        :param base_url: base URL of the Luna installation e.g., http://example.com; /luna/servlet will be appended to this
        :param query: query for the LUNA search API, either a mapping object or a sequence of two-element tuples, which may contain str or bytes objects
        """
        return (
            base_url.rstrip("/")
            + "/luna/servlet/as/search?"
            + urlencode(query, quote_via=quote)  # type: ignore
        )

    def __call__(self, *, force: bool, **kwds):
        url = self.create_search_url(base_url=self.__base_url, query=self.__query)
        cached_json_file_path = download_file(
            force=force,
            from_url=url,
            to_dir_path=self.__extracted_data_dir_path,
            to_file_extension=".json",
        )

        with open(cached_json_file_path) as cached_json_file:
            return {
                "base_url": self.__base_url,
                "search_results": json.load(cached_json_file),
            }
