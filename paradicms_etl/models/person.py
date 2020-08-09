from dataclasses import dataclass
from typing import Optional

from dataclasses_json import LetterCase, dataclass_json
from rdflib import Graph, Literal
from rdflib.namespace import FOAF, RDF
from rdflib.resource import Resource

from paradicms_etl._model import _Model
from ..namespace import CMS, CONTACT


@dataclass_json(letter_case=LetterCase.CAMEL)
@dataclass
class Person(_Model):
    name: str
    family_name: Optional[str] = None
    given_name: Optional[str] = None
    sort_name: Optional[str] = None

    def to_rdf(self, *, graph: Graph) -> Resource:
        resource = _Model.to_rdf(self, graph=graph)
        resource.add(RDF.type, CMS[self.__class__.__name__])
        if self.family_name is not None:
            resource.add(FOAF.familyName, Literal(self.family_name))
        if self.given_name is not None:
            resource.add(FOAF.givenName, Literal(self.given_name))
        resource.add(FOAF.name, Literal(self.name))
        if self.sort_name is not None:
            resource.add(CONTACT.sortName, Literal(self.sort_name))
        return resource
