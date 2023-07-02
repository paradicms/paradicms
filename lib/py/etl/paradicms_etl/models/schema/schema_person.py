from typing import Optional

from rdflib import URIRef, Graph, BNode, SDO
from rdflib.resource import Resource

from paradicms_etl.models.person import Person
from paradicms_etl.models.schema.schema_model import SchemaModel


class SchemaPerson(SchemaModel, Person):
    """
    Schema.org implementation of the Person interface using schema:Person properties.
    """

    class Builder(SchemaModel.Builder):
        def build(self):
            return SchemaPerson(self._resource)

        def set_family_name(self, family_name: str) -> "SchemaPerson.Builder":
            self.set(SDO.familyName, family_name)
            return self

        def set_given_name(self, given_name: str) -> "SchemaPerson.Builder":
            self.set(SDO.givenName, given_name)
            return self

    def __init__(self, resource: Resource):
        SchemaModel.__init__(self, resource)
        self.label

    @classmethod
    def builder(cls, *, name: str, uri: Optional[URIRef] = None) -> Builder:
        builder = cls.Builder(Graph().resource(uri if uri is not None else BNode()))
        builder.set(SDO.name, name)
        return builder

    @property
    def label(self) -> str:
        return self._required_label
