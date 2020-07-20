from pathlib import Path
from typing import Generator, Optional

from pathvalidate import sanitize_filename
from rdflib import Graph

from paradicms_etl._loader import _Loader
from paradicms_etl._model import _Model
from paradicms_etl.pipeline_storage import PipelineStorage


class RdfFileLoader(_Loader):
    def __init__(self, *, file_path: Optional[Path]=None, format="ttl", **kwds):
        _Loader.__init__(self, **kwds)
        self.__file_path = file_path
        self.__format = format

    def load(self, *, force: bool, models: Generator[_Model, None, None], storage: PipelineStorage):
        file_path = self.__file_path
        if file_path is None:
            file_path = storage.transformed_data_dir_path / (sanitize_filename(self._pipeline_id) + "." + self.__format)
        graph = Graph()
        for model in models:
            model.to_rdf(graph=graph)
        with open(file_path, "w+b") as file_:
            graph.serialize(destination=file_, format=self.__format)
