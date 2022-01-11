from abc import abstractmethod
from typing import Generator, Tuple

from paradicms_etl.model import Model

from paradicms_etl.loader import Loader


class _BufferingLoader(Loader):
    def __init__(self, **kwds):
        Loader.__init__(self, **kwds)
        self.__models = []

    def flush(self):
        return self._flush(tuple(self.__models))

    @abstractmethod
    def _flush(self, models: Tuple[Model, ...]):
        raise NotImplementedError

    def load(self, *, models: Generator[Model, None, None]):
        self.__models.extend(models)
