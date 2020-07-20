from abc import ABC, abstractmethod
from typing import Generator

from paradicms_etl._model import _Model
from paradicms_etl.pipeline_storage import PipelineStorage


class _Loader(ABC):
    def __init__(self, *, pipeline_id: str, **kwds):
        self.__pipeline_id = pipeline_id

    @abstractmethod
    def load(self, *, force: bool, models: Generator[_Model, None, None], storage: PipelineStorage):
        pass

    @property
    def _pipeline_id(self):
        return self.__pipeline_id

    @property
    def _pipeline_uri(self):
        from ._pipeline import _Pipeline
        return _Pipeline.id_to_uri(self._pipeline_id)
