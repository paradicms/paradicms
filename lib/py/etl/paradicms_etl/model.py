from abc import ABC, abstractmethod
from typing import Optional, Any, Dict

from rdflib import Graph, URIRef
from rdflib.resource import Resource


class Model(ABC):
    @classmethod
    @abstractmethod
    def from_rdf(cls, resource: Resource):
        raise NotImplementedError

    @classmethod
    def json_ld_context(cls) -> Dict[str, Any]:
        return {"@version": 1.1}

    @property
    def label(self) -> Optional[str]:
        return None

    @classmethod
    @abstractmethod
    def rdf_type_uri(cls) -> URIRef:
        raise NotImplementedError

    @abstractmethod
    def to_rdf(self, graph: Graph) -> Resource:
        raise NotImplementedError

    @property
    @abstractmethod
    def uri(self) -> Optional[URIRef]:
        raise NotImplementedError
