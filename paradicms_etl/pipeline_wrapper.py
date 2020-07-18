import logging
from pathlib import Path
from typing import Dict, Optional, Union

from rdflib import Graph

from paradicms_etl._pipeline import _Pipeline
from paradicms_etl.namespace import bind_namespaces
from paradicms_etl.pipeline_storage import PipelineStorage


class PipelineWrapper:
    def __init__(self, pipeline: _Pipeline, data_dir_path: Optional[Path] = None):
        self.__logger = logging.getLogger(pipeline.__class__.__name__)
        self.__pipeline = pipeline
        self.__storage = PipelineStorage.create(data_dir_path=self.__create_data_dir_path(data_dir_path=data_dir_path), pipeline_id=self.__pipeline.id)

    def __create_data_dir_path(self, data_dir_path: Optional[Path] = None) -> Path:
        if data_dir_path is not None:
            if data_dir_path.is_dir():
                return data_dir_path
        else:
            for data_dir_path in (
                    # In the container
                    Path("/data"),
                    # In the checkout
                    Path(__file__).absolute().parent.parent / "data"
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
