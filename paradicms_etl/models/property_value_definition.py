from dataclasses import dataclass

from rdflib import Graph
from rdflib.namespace import RDF, RDFS
from rdflib.resource import Resource
from rdflib.term import Literal, Node, URIRef

from paradicms_etl.models._named_model import _NamedModel


@dataclass(frozen=True)
class PropertyValueDefinition(_NamedModel):
    label: str
    property_uri: URIRef  # Child -> parent reference
    value: Node  # A property value

    def to_rdf(self, *, graph: Graph) -> Resource:
        resource = _NamedModel.to_rdf(self, graph=graph)
        resource.add(RDFS.label, Literal(self.label))
        # Not kosher use of rdf:predicate, but I couldn't find a better fit
        resource.add(RDF.predicate, self.property_uri)
        resource.add(RDF.value, self.value)
        return resource
