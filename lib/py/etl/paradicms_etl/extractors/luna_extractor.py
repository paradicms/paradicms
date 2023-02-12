import json
import logging
from pathlib import Path
from urllib.parse import urlencode, quote
from urllib.request import urlretrieve

from pathvalidate import sanitize_filename

logger = logging.getLogger(__name__)


class LunaExtractor:
    """
    Extractor for LUNA Digital Asset Management (http://www.lunaimaging.com/) software installations on the web.
    """

    def __init__(self, *, base_url: str, query):
        """
        :param base_url: base URL of the Luna installation e.g., http://example.com; /luna/servlet will be appended to this
        :param query: query for the LUNA search API, either a mapping object or a sequence of two-element tuples, which may contain str or bytes objects
        """

        self.__base_url = base_url
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

    def __call__(self, *, extracted_data_dir_path: Path, force: bool, **kwds):
        url = self.create_search_url(base_url=self.__base_url, query=self.__query)
        cached_json_file_path = extracted_data_dir_path / (
            str(sanitize_filename(url)) + ".json"
        )

        if force or not cached_json_file_path.is_file():
            logger.info("downloading %s", url)
            temp_file_path, _ = urlretrieve(url)
            logger.debug("downloaded %s to %s", url, temp_file_path)

            Path(temp_file_path).rename(cached_json_file_path)
            logger.debug("renamed %s to %s", temp_file_path, cached_json_file_path)

        with open(cached_json_file_path) as cached_json_file:
            return {
                "base_url": self.__base_url,
                "search_results": json.load(cached_json_file),
            }
