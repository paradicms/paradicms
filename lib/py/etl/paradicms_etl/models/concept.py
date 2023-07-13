from abc import abstractmethod
from typing import Tuple

from rdflib.term import Node, URIRef

from paradicms_etl.model import Model
from paradicms_etl.models.images_mixin import ImagesMixin


class Concept(Model, ImagesMixin):
    @property
    @abstractmethod
    def label(self) -> str:
        raise NotImplementedError

    @property
    @abstractmethod
    def type_uris(self) -> Tuple[URIRef, ...]:
        raise NotImplementedError

    @property
    @abstractmethod
    def value(self) -> Node:
        raise NotImplementedError
