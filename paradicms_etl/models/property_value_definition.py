from dataclasses import dataclass
from typing import Optional

from rdflib import Graph
from rdflib.namespace import RDF, RDFS
from rdflib.resource import Resource
from rdflib.term import Literal, Node, URIRef

from paradicms_etl.models._named_model import _NamedModel


@dataclass(frozen=True)
class PropertyValueDefinition(_NamedModel):
    property_uri: URIRef  # Child -> parent reference
    value: Node  # A property value
    label: Optional[str] = None

    def to_rdf(self, *, graph: Graph) -> Resource:
        resource = _NamedModel.to_rdf(self, graph=graph)
        if self.label is not None:
            resource.add(RDFS.label, Literal(self.label))
        # Not kosher use of rdf:predicate, but I couldn't find a better fit
        resource.add(RDF.predicate, self.property_uri)
        resource.add(RDF.value, self.value)
        return resource
