from abc import abstractmethod
from typing import Tuple

from rdflib.term import Node, URIRef

from paradicms_etl.models.named_model import NamedModel


class Concept(NamedModel):
    @property
    @abstractmethod
    def label(self) -> str:
        pass

    @property
    @abstractmethod
    def type_uris(self) -> Tuple[URIRef, ...]:
        pass

    @property
    @abstractmethod
    def value(self) -> Node:
        pass
