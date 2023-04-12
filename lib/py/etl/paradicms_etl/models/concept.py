from abc import abstractmethod
from typing import Tuple

from rdflib.namespace import RDF
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
        return tuple(self._uri_values(RDF.type))

    @property
    @abstractmethod
    def value(self) -> Node:
        pass
