from typing import Tuple, Iterable

from paradicms_etl.loader import Loader
from paradicms_etl.model import Model


class CompositeLoader(Loader):
    def __init__(self, *, loaders: Tuple[Loader, ...], **kwds):
        Loader.__init__(self, **kwds)
        self.__loaders = loaders

    def flush(self):
        for loader in self.__loaders:
            loader.flush()

    def load(self, *, models: Iterable[Model], **kwds):
        models_frozen = tuple(models)
        for loader in self.__loaders:
            loader.load(models=models_frozen, **kwds)
