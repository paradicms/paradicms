from typing import Tuple, Iterable

from more_itertools import consume

from paradicms_etl.loader import Loader
from paradicms_etl.model import Model


class CompositeLoader:
    def __init__(self, loaders: Tuple[Loader, ...]):
        self.__loaders = loaders

    def __call__(self, *, models: Iterable[Model], **kwds) -> Iterable[Model]:
        models_frozen = tuple(models)
        for loader in self.__loaders:
            consume(loader(models=models_frozen, **kwds))
        return models_frozen
