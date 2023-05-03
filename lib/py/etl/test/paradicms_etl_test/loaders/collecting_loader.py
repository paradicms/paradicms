from typing import List, Iterable, Tuple

from paradicms_etl.model import Model


class CollectingLoader:
    def __init__(self):
        self.__models: List[Model] = []

    def __call__(self, *, models: Iterable[Model], **kwds) -> None:
        self.__models.extend(models)

    @property
    def models(self) -> Tuple[Model, ...]:
        return tuple(self.__models)
