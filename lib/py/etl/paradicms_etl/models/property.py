from abc import abstractmethod

from rdflib import URIRef

from paradicms_etl.model import Model
from paradicms_etl.models.images_mixin import ImagesMixin


class Property(Model, ImagesMixin):
    @property
    @abstractmethod
    def filterable(self) -> bool | None:
        raise NotImplementedError

    @property
    @abstractmethod
    def label(self) -> str:
        raise NotImplementedError

    @property
    @abstractmethod
    def order(self) -> int | None:
        raise NotImplementedError

    @property
    @abstractmethod
    def range(self) -> URIRef | None:  # noqa: A003
        raise NotImplementedError

    @property
    @abstractmethod
    def searchable(self) -> bool | None:
        raise NotImplementedError
