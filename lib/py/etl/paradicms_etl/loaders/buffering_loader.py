from abc import abstractmethod
from typing import Tuple, Iterable

from paradicms_etl.model import Model


class BufferingLoader:
    def __init__(self):
        self.__models = []

    @abstractmethod
    def _flush(self, *, models: Tuple[Model, ...], pipeline_id: str):
        raise NotImplementedError

    def __call__(self, *, flush: bool, models: Iterable[Model], pipeline_id: str):
        self.__models.extend(models)
        if flush:
            self._flush(models=tuple(models), pipeline_id=pipeline_id)
            self.__models = []
