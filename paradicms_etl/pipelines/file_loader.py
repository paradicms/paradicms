from pathlib import Path
from typing import Optional

from pathvalidate import sanitize_filename
from rdflib import Graph

from paradicms_etl.pipelines._loader import _Loader
from paradicms_etl.pipelines.pipeline_storage import PipelineStorage


class FileLoader(_Loader):
    def __init__(self, *, file_path: Optional[Path]=None, format="ttl", **kwds):
        _Loader.__init__(self, **kwds)
        self.__file_path = file_path
        self.__format = format

    def load(self, *, force: bool, graph: Graph, storage: PipelineStorage):
        file_path = self.__file_path
        if file_path is None:
            file_path = storage.transformed_data_dir_path / (sanitize_filename(self._pipeline_id) + "." + self.__format)
        with open(file_path, "w+b") as file_:
            graph.serialize(destination=file_, format=self.__format)
