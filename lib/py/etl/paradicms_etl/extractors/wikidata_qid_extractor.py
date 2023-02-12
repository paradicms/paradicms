import logging
import shutil
import ssl
from pathlib import Path
from typing import Tuple
from urllib.request import urlopen

from rdflib import Graph

logger = logging.getLogger(__name__)


class WikidataQidExtractor:
    """
    Extractor that downloads a set of Wikidata concepts (identified by QIDs) in RDF.
    """

    def __init__(self, qids: Tuple[str, ...]):
        self.__qids = qids

    def __call__(self, *, extracted_data_dir_path: Path, force: bool, **kwds):
        rdf_file_paths = []

        # 20211003 Python thinks the Wikidata certificate is expired, so ignore it
        ssl_ctx = ssl.create_default_context()
        ssl_ctx.check_hostname = False
        ssl_ctx.verify_mode = ssl.CERT_NONE

        for qid in self.__qids:
            file_name = f"{qid}.ttl"
            file_path = extracted_data_dir_path / file_name
            if file_path.is_file() and not force:
                rdf_file_paths.append(file_path)
                logger.info("%s already downloaded, skipping", file_path)
                continue

            url = f"https://www.wikidata.org/entity/{file_name}"
            logger.debug("downloading %s to %s", url, file_path)
            with urlopen(url, context=ssl_ctx) as response, open(
                file_path, "wb"
            ) as file_:
                shutil.copyfileobj(response, file_)
            logger.info("downloaded %s to %s", url, file_path)
            rdf_file_paths.append(file_path)

        graph = Graph()
        for rdf_file_path in rdf_file_paths:
            graph.parse(format="ttl", source=str(rdf_file_path))

        return {"graph": graph}
