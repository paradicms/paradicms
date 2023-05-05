import ssl
from pathlib import Path
from typing import Tuple, List

from rdflib import Graph, URIRef

from paradicms_etl.utils.file_cache import FileCache


class WikidataQidExtractor:
    """
    Extractor that downloads a set of Wikidata concepts (identified by QIDs) in RDF.
    """

    def __init__(self, cache_dir_path: Path, qids: Tuple[str, ...]):
        # 20211003 Python thinks the Wikidata certificate is expired, so ignore it
        ssl_context = ssl.create_default_context()
        ssl_context.check_hostname = False
        ssl_context.verify_mode = ssl.CERT_NONE
        self.__file_cache = FileCache(
            cache_dir_path=cache_dir_path,
            ssl_context=ssl_context,
        )
        self.__qids = qids

    def __call__(self, *, force: bool, **kwds):
        rdf_file_paths: List[Path] = []
        for qid in self.__qids:
            rdf_file_paths.append(
                self.__file_cache.get_file(
                    URIRef(f"https://www.wikidata.org/entity/{qid}.ttl"),
                    force_download=force,
                )
            )

        graph = Graph()
        for rdf_file_path in rdf_file_paths:
            graph.parse(format="ttl", source=str(rdf_file_path))

        return {"graph": graph}
