from abc import abstractmethod
from typing import Tuple, Iterable

from paradicms_etl.model import Model


class BufferingLoader:
    def __init__(self):
        self.__models = []

    @abstractmethod
    def _flush(self, *, models: Tuple[Model, ...]):
        raise NotImplementedError

    def __call__(self, *, flush: bool, models: Iterable[Model]):
        self.__models.extend(models)
        if flush:
            result = self._flush(models=tuple(models))
            self.__models = []
            return result
        else:
            return None
