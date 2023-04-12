from abc import ABC, abstractmethod
from typing import Optional

from rdflib import Graph
from rdflib.resource import Resource


class Model(ABC):
    @property
    def label(self) -> Optional[str]:
        pass

    @classmethod
    @abstractmethod
    def from_rdf(cls, resource: Resource):
        pass

    @abstractmethod
    def to_rdf(self, graph: Graph) -> Resource:
        pass
