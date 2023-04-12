from abc import ABC, abstractmethod
from typing import Optional

from rdflib import Graph
from rdflib.resource import Resource


class Model(ABC):
    @classmethod
    @abstractmethod
    def from_rdf(cls, resource: Resource):
        raise NotImplementedError

    @property
    def label(self) -> Optional[str]:
        raise NotImplementedError

    @abstractmethod
    def to_rdf(self, graph: Graph) -> Resource:
        raise NotImplementedError
