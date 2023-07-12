from abc import abstractmethod
from typing import Tuple

from rdflib import URIRef

from paradicms_etl.model import Model
from paradicms_etl.models.images_mixin import ImagesMixin


class Collection(Model, ImagesMixin):
    class Builder(ImagesMixin.Builder):
        @abstractmethod
        def add_work(self, work: URIRef) -> "Collection.Builder":
            raise NotImplementedError

        @abstractmethod
        def build(self) -> "Collection":
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
    def work_uris(self) -> Tuple[URIRef, ...]:
        raise NotImplementedError
