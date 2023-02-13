from typing import Tuple, Iterable

from paradicms_etl.loader import Loader
from paradicms_etl.model import Model


class CompositeLoader:
    def __init__(self, loaders: Tuple[Loader, ...]):
        self.__loaders = loaders

    def __call__(self, *, models: Iterable[Model], **kwds):
        models_frozen = tuple(models)
        for loader in self.__loaders:
            loader(models=models_frozen, **kwds)
