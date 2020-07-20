from dataclasses import dataclass

from dataclasses_json import dataclass_json
from rdflib import Graph, Literal
from rdflib.namespace import FOAF
from rdflib.resource import Resource

from paradicms_etl._model import _Model


@dataclass_json
@dataclass
class User(_Model):
    name: str
    email: str

    def to_rdf(self, *, graph: Graph) -> Resource:
        resource = _Model.to_rdf(self, graph=graph)
        resource.add(FOAF.mbox, Literal(self.email))
        resource.add(FOAF.name, Literal(self.name))
        return resource
