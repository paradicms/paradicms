from typing import Optional

from rdflib import URIRef, Graph, BNode, SDO

from paradicms_etl.models.person import Person
from paradicms_etl.models.schema.schema_agent import SchemaAgent


class SchemaPerson(SchemaAgent, Person):
    """
    Schema.org implementation of the Person interface using schema:Person properties.
    """

    class Builder(SchemaAgent.Builder):
        def build(self):
            return SchemaPerson(self._resource)

        def set_family_name(self, family_name: str) -> "SchemaPerson.Builder":
            self.set(SDO.familyName, family_name)
            return self

        def set_given_name(self, given_name: str) -> "SchemaPerson.Builder":
            self.set(SDO.givenName, given_name)
            return self

    @classmethod
    def builder(cls, *, name: str, uri: Optional[URIRef] = None) -> Builder:
        builder = cls.Builder(Graph().resource(uri if uri is not None else BNode()))
        builder.set(SDO.name, name)
        return builder

    @property
    def label(self) -> str:
        return self.name
