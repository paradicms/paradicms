import shutil
from typing import Tuple
from urllib.request import urlopen

from paradicms_etl._extractor import _Extractor


class WikidataExtractor(_Extractor):
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
        return {"rdf_file_paths": tuple(rdf_file_paths)}
