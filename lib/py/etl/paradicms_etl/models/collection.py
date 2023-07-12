from abc import abstractmethod
from typing import Tuple, Union

from rdflib import URIRef

from paradicms_etl.model import Model
from paradicms_etl.models.images_mixin import ImagesMixin
from paradicms_etl.models.work import Work


class Collection(Model, ImagesMixin):
    class Builder(ImagesMixin.Builder):
        @abstractmethod
        def add_work(self, work: Union[Work, URIRef]) -> "Collection.Builder":
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
