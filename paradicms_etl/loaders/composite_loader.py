from typing import Generator, Tuple

from paradicms_etl.model import Model

from paradicms_etl.loader import Loader


class CompositeLoader(Loader):
    def __init__(self, *, loaders: Tuple[Loader, ...], **kwds):
        Loader.__init__(self, **kwds)
        self.__loaders = loaders

    def flush(self):
        for loader in self.__loaders:
            loader.flush()

    def load(self, *, models: Generator[Model, None, None], **kwds):
        models_frozen = tuple(models)
        for loader in self.__loaders:
            loader.load(models=models_frozen, **kwds)
