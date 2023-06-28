from typing import Optional

from rdflib import URIRef, Graph, BNode
from rdflib.namespace import FOAF

from paradicms_etl.models.foaf.foaf_agent import FoafAgent
from paradicms_etl.models.person import Person


class FoafPerson(FoafAgent, Person):
    class Builder(FoafAgent.Builder):
        def build(self):
            return FoafPerson(self._resource)

        def set_family_name(self, family_name: str) -> "FoafPerson.Builder":
            self.set(FOAF.familyName, family_name)
            return self

        def set_given_name(self, given_name: str) -> "FoafPerson.Builder":
            self.set(FOAF.givenName, given_name)
            return self

    @classmethod
    def builder(cls, *, name: str, uri: Optional[URIRef] = None) -> Builder:
        builder = cls.Builder(Graph().resource(uri if uri is not None else BNode()))
        builder.set(FOAF.name, name)
        return builder
