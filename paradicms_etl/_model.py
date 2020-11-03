from dataclasses import dataclass

from rdflib import BNode, Graph
from rdflib.resource import Resource


@dataclass(frozen=True)
class _Model:
    def to_rdf(self, *, graph: Graph, property_definitions) -> Resource:
        """
        Convert this model to RDF.
        """
        return graph.resource(BNode().skolemize())
