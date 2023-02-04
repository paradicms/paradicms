from abc import abstractmethod
from typing import Tuple, Iterable

from paradicms_etl.loader import Loader
from paradicms_etl.model import Model


class BufferingLoader(Loader):
    def __init__(self, **kwds):
        Loader.__init__(self, **kwds)
        self.__models = []

    def flush(self):
        return self._flush(tuple(self.__models))

    @abstractmethod
    def _flush(self, models: Tuple[Model, ...]):
        raise NotImplementedError

    def load(self, *, models: Iterable[Model]):
        self.__models.extend(models)
