from pathvalidate import sanitize_filename
from rdflib import Graph

from paradicms.etl.lib.pipeline._loader import _Loader
from paradicms.etl.lib.pipeline.pipeline_storage import PipelineStorage


class FileLoader(_Loader):
    def load(self, *, force: bool, graph: Graph, storage: PipelineStorage):
        file_path = storage.transformed_data_dir_path / (sanitize_filename(self._pipeline_id) + ".ttl")
        with open(file_path, "w+b") as file_:
            graph.serialize(destination=file_, format="ttl")
