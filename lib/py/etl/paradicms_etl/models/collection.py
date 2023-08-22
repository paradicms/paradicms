from __future__ import annotations

from abc import abstractmethod
from typing import TYPE_CHECKING

from paradicms_etl.model import Model
from paradicms_etl.models.images_mixin import ImagesMixin

if TYPE_CHECKING:
    from rdflib import URIRef


class Collection(Model, ImagesMixin):
    class Builder(ImagesMixin.Builder):
        @abstractmethod
        def add_work(self, work: URIRef) -> Collection.Builder:
            raise NotImplementedError

        @abstractmethod
        def build(self) -> Collection:
            raise NotImplementedError

    @property
    @abstractmethod
    def label(self) -> str:
        raise NotImplementedError

    @abstractmethod
    def replacer(self) -> Builder:
        raise NotImplementedError

    @property
    @abstractmethod
    def work_uris(self) -> tuple[URIRef, ...]:
        raise NotImplementedError
