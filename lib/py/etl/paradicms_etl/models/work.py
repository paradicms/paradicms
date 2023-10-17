from abc import abstractmethod

from rdflib import URIRef

from paradicms_etl.model import Model
from paradicms_etl.models.date_time_union import DateTimeUnion
from paradicms_etl.models.images_mixin import ImagesMixin
from paradicms_etl.models.text import Text


class Work(Model, ImagesMixin):
    """
    Model of a work such as a painting or a garment.
    """

    class Builder(ImagesMixin.Builder):
        @abstractmethod
        def build(self) -> "Work":
            raise NotImplementedError

    @property
    @abstractmethod
    def contributors(self) -> tuple[str | URIRef, ...]:
        raise NotImplementedError

    @property
    @abstractmethod
    def created(self) -> DateTimeUnion | None:
        raise NotImplementedError

    @property
    @abstractmethod
    def creators(self) -> tuple[str | URIRef, ...]:
        raise NotImplementedError

    @property
    @abstractmethod
    def description(self) -> str | Text | None:
        raise NotImplementedError

    @property
    @abstractmethod
    def label(self) -> str:
        raise NotImplementedError

    @property
    @abstractmethod
    def modified(self) -> DateTimeUnion | None:
        raise NotImplementedError

    @abstractmethod
    def replacer(self) -> Builder:
        raise NotImplementedError

    @property
    @abstractmethod
    def spatial(self) -> str | URIRef | None:
        raise NotImplementedError

    @property
    @abstractmethod
    def subjects(self) -> tuple[str | URIRef, ...]:
        raise NotImplementedError
