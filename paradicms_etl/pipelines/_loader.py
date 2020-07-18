from abc import ABC, abstractmethod

from rdflib import Graph

from paradicms_etl.pipelines.pipeline_storage import PipelineStorage


class _Loader(ABC):
    def __init__(self, *, pipeline_id: str, **kwds):
        self.__pipeline_id = pipeline_id

    @abstractmethod
    def load(self, *, force: bool, graph: Graph, storage: PipelineStorage):
        pass

    @property
    def _pipeline_id(self):
        return self.__pipeline_id

    @property
    def _pipeline_uri(self):
        from ._pipeline import _Pipeline
        return _Pipeline.id_to_uri(self._pipeline_id)
