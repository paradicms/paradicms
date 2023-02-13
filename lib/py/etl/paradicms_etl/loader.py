from typing import Iterable, Protocol, Any

from paradicms_etl.model import Model


class Loader(Protocol):
    def __call__(self, *, flush: bool, models: Iterable[Model]) -> Any:
        pass
