from dataclasses import dataclass

from rdflib import Graph, Literal, RDFS
from rdflib.resource import Resource

from paradicms_etl.models._named_model import _NamedModel


@dataclass(frozen=True)
class PropertyDefinition(_NamedModel):
    label: str

    def to_rdf(self, *, graph: Graph) -> Resource:
        resource = _NamedModel.to_rdf(self, graph=graph)
        resource.add(RDFS.label, Literal(self.label))
        return resource
