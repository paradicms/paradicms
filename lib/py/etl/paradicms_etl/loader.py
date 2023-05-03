from typing import Iterable, Protocol

from paradicms_etl.model import Model


class Loader(Protocol):
    def __call__(self, *, flush: bool, models: Iterable[Model]) -> Iterable[Model]:
        pass
