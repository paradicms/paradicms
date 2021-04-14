from dataclasses import dataclass

from rdflib import BNode, Graph, RDF
from rdflib.resource import Resource

from paradicms_etl.namespace import CMS


@dataclass(frozen=True)
class _Model:
    def to_rdf(self, *, graph: Graph) -> Resource:
        """
        Convert this model to RDF.
        """

        resource = graph.resource(BNode().skolemize())
        resource.add(RDF.type, CMS[self.__class__.__name__])
        return resource
