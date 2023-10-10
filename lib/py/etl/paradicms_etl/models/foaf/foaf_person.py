from typing import Optional

from rdflib import Graph, URIRef
from rdflib.namespace import FOAF

from paradicms_etl.models.foaf.foaf_agent import FoafAgent
from paradicms_etl.models.person import Person
from paradicms_etl.utils.uuid_urn import uuid_urn


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
        builder = cls.Builder(Graph().resource(uri if uri is not None else uuid_urn()))
        builder.set(FOAF.name, name)
        return builder

    @property
    def family_name(self) -> str | None:
        return self._optional_value(FOAF.familyName, self._map_term_to_str)

    @property
    def given_name(self) -> str | None:
        return self._optional_value(FOAF.givenName, self._map_term_to_str)

    @property
    def label(self) -> str:
        return super().label

    def replacer(self) -> Builder:
        return self.Builder(self._resource)
