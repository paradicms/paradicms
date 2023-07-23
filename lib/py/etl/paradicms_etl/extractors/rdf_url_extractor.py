import ssl
from pathlib import Path

from rdflib import URIRef

from paradicms_etl.extractors.rdf_file_extractor import RdfFileExtractor
from paradicms_etl.utils.file_cache import FileCache


class RdfUrlExtractor:
    def __init__(self, cache_dir_path: Path, rdf_url: URIRef):
        # 20211003 Python thinks the Wikidata certificate is expired, so ignore it
        ssl_context = ssl.create_default_context()
        ssl_context.check_hostname = False
        ssl_context.verify_mode = ssl.CERT_NONE
        self.__file_cache = FileCache(
            cache_dir_path=cache_dir_path,
            ssl_context=ssl_context,
        )
        self.__rdf_url = rdf_url

    def __call__(self, *, force: bool, **kwds):
        return RdfFileExtractor(
            rdf_file_path=self.__file_cache.get_file(
                self.__rdf_url,
                force_download=force,
            )
        )()
