import ssl
from pathlib import Path
from typing import Tuple, List

from rdflib import Graph, URIRef

from paradicms_etl.utils.canonicalize_wikidata_entity_uri import (
    canonicalize_wikidata_entity_uri,
)
from paradicms_etl.utils.file_cache import FileCache


class WikidataEntityExtractor:
    """
    Extractor that downloads a set of Wikidata items (identified by item Q* and property* id's) in RDF.
    """

    def __init__(self, cache_dir_path: Path, entity_uris: Tuple[URIRef, ...]):
        # 20211003 Python thinks the Wikidata certificate is expired, so ignore it
        ssl_context = ssl.create_default_context()
        ssl_context.check_hostname = False
        ssl_context.verify_mode = ssl.CERT_NONE
        self.__file_cache = FileCache(
            cache_dir_path=cache_dir_path,
            ssl_context=ssl_context,
        )
        self.__entity_uris = (
            canonicalize_wikidata_entity_uri(entity_uri) for entity_uri in entity_uris
        )

    def __call__(self, *, force: bool, **kwds):
        rdf_file_paths: List[Path] = []
        for entity_uri in self.__entity_uris:
            rdf_file_paths.append(
                self.__file_cache.get_file(
                    URIRef(str(entity_uri) + ".ttl"),
                    force_download=force,
                )
            )

        graph = Graph()
        for rdf_file_path in rdf_file_paths:
            graph.parse(format="ttl", source=str(rdf_file_path))

        return {"graph": graph}
