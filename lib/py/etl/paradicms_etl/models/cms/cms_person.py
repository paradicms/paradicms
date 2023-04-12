from rdflib import URIRef
from rdflib.namespace import FOAF

from paradicms_etl.models.agent import Agent
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class Person(Agent):
    class Builder(Agent.Builder):
        def build(self):
            return Person(self._resource)

        def set_family_name(self, family_name: str) -> "Person.Builder":
            self.set(FOAF.familyName, family_name)
            return self

        def set_given_name(self, given_name: str) -> "Person.Builder":
            self.set(FOAF.givenName, given_name)
            return self

    @classmethod
    def builder(cls, *, name: str, uri: URIRef) -> Builder:
        return cls.Builder(name=name, uri=uri)

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            Agent.json_ld_context(),
            {
                "familyName": {"@id": str(FOAF.familyName)},
                "givenName": {"@id": str(FOAF.givenName)},
            },
        )
