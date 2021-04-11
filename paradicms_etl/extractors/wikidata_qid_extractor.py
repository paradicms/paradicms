import shutil
from typing import Tuple
from urllib.request import urlopen

from rdflib import Graph

from paradicms_etl._extractor import _Extractor


class WikidataQidExtractor(_Extractor):
    """
    Extractor that downloads a set of Wikidata concepts (identified by QIDs) in RDF.
    """

    def __init__(self, qids: Tuple[str, ...], **kwds):
        _Extractor.__init__(self, **kwds)
        self.__qids = qids

    def extract(self, *, force: bool):
        rdf_file_paths = []
        for qid in self.__qids:
            file_name = f"{qid}.ttl"
            file_path = self._extracted_data_dir_path / file_name
            if file_path.is_file() and not force:
                rdf_file_paths.append(file_path)
                self._logger.info("%s already downloaded, skipping", file_path)
                continue

            url = f"http://www.wikidata.org/entity/{file_name}"
            self._logger.debug("downloading %s to %s", url, file_path)
            with urlopen(url) as response, open(file_path, "wb") as file_:
                shutil.copyfileobj(response, file_)
            self._logger.info("downloaded %s to %s", url, file_path)
            rdf_file_paths.append(file_path)

        graph = Graph()
        for rdf_file_path in rdf_file_paths:
            graph.parse(format="ttl", source=str(rdf_file_path))

        return {"graph": graph}
