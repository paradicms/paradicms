from dataclasses import dataclass
from typing import Optional, Tuple

from rdflib import Graph
from rdflib.namespace import RDF, RDFS
from rdflib.resource import Resource
from rdflib.term import Literal, Node, URIRef

from paradicms_etl.models._named_model import _NamedModel


@dataclass(frozen=True)
class PropertyValueDefinition(_NamedModel):
    property_uris: Tuple[URIRef, ...]  # Child -> parent references
    value: Node  # A property value
    label: Optional[str] = None

    def __post_init__(self):
        if not self.property_uris:
            raise ValueError("must specify at least one property URI")

    def to_rdf(self, *, graph: Graph) -> Resource:
        resource = _NamedModel.to_rdf(self, graph=graph)
        if self.label is not None:
            resource.add(RDFS.label, Literal(self.label))
        for property_uri in self.property_uris:
            # Not kosher use of rdf:predicate, but I couldn't find a better fit
            resource.add(RDF.predicate, property_uri)
        resource.add(RDF.value, self.value)
        return resource
