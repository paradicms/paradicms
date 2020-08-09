from dataclasses import dataclass

from dataclasses_json import LetterCase, dataclass_json
from rdflib import Graph, Literal
from rdflib.namespace import FOAF, RDF
from rdflib.resource import Resource

from paradicms_etl._model import _Model
from paradicms_etl.namespace import CMS


@dataclass_json(letter_case=LetterCase.CAMEL)
@dataclass
class User(_Model):
    email: str
    name: str

    def to_rdf(self, *, graph: Graph) -> Resource:
        resource = _Model.to_rdf(self, graph=graph)
        resource.add(RDF.type, CMS[self.__class__.__name__])
        resource.add(FOAF.mbox, Literal(self.email))
        resource.add(FOAF.name, Literal(self.name))
        return resource

User(email="x", name="x").to_json()