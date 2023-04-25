from abc import ABC, abstractmethod
from typing import Optional

from rdflib import Graph, URIRef
from rdflib.resource import Resource


class Model(ABC):
    @classmethod
    @abstractmethod
    def from_rdf(cls, resource: Resource):
        raise NotImplementedError

    @property
    def label(self) -> Optional[str]:
        return None

    @classmethod
    def label_property_uri(cls) -> Optional[URIRef]:
        return None

    @abstractmethod
    def to_rdf(self, graph: Graph) -> Resource:
        raise NotImplementedError

    @property
    @abstractmethod
    def uri(self) -> Optional[URIRef]:
        raise NotImplementedError
