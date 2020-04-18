import os.path
from pathlib import Path
from typing import Dict, Union

from rdflib import Graph

from paradicms.etl.lib.namespace import bind_namespaces
from paradicms.etl.lib.pipeline._pipeline import _Pipeline
from paradicms.etl.lib.pipeline.pipeline_storage import PipelineStorage


class PipelineWrapper:
    def __init__(self, args, logger, pipeline: _Pipeline):
        self.__args = args
        self.__logger = logger
        self.__pipeline = pipeline
        self.__storage = PipelineStorage.create(data_dir_path=self.__create_data_dir_path(), pipeline_id=self.__pipeline.id)

    def __create_data_dir_path(self) -> Path:
        data_dir_path = Path(self.__args.data_dir_path) if self.__args.data_dir_path else None
        if data_dir_path is not None:
            if data_dir_path.is_dir():
                return data_dir_path
        else:
            for data_dir_path in (
                    # In the container
                    Path("/data"),
                    # In the checkout
                    Path(os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "..", "data")))
            ):
                if data_dir_path.is_dir():
                    return data_dir_path
        raise ValueError("data dir path %s does not exist" % data_dir_path)

    def extract(self, force: bool):
        extract_kwds = self.__pipeline.extractor.extract(force=force, storage=self.__storage)
        return extract_kwds if extract_kwds is not None else {}

    def load(self, force: bool, graph: Graph, **transform_kwds) -> None:
        self.__pipeline.loader.load(force=force, graph=graph, storage=self.__storage, **transform_kwds)

    def transform(self, force: bool, **extract_kwds) -> Union[Graph, Dict[str, object]]:
        graph_or_kwds = self.__pipeline.transformer.transform(**extract_kwds)
        if isinstance(graph_or_kwds, dict):
            graph = graph_or_kwds["graph"]
        else:
            graph = graph_or_kwds
        assert isinstance(graph, Graph)
        bind_namespaces(graph.namespace_manager)
        return graph_or_kwds
