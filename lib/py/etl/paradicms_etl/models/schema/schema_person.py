from typing import Optional

from rdflib import URIRef, Graph, SDO
from rdflib.resource import Resource

from paradicms_etl.models.date_time_union import DateTimeUnion
from paradicms_etl.models.person import Person
from paradicms_etl.models.schema.schema_model import SchemaModel
from paradicms_etl.utils.uuid_urn import uuid_urn


class SchemaPerson(SchemaModel, Person):
    """
    Schema.org implementation of the Person interface using schema:Person properties.
    """

    class Builder(SchemaModel.Builder):
        def build(self):
            return SchemaPerson(self._resource)

        def set_birth_date(self, birth_date: DateTimeUnion) -> "SchemaPerson.Builder":
            self.set(SDO.birthDate, birth_date)
            return self

        def set_death_date(self, death_date: DateTimeUnion) -> "SchemaPerson.Builder":
            self.set(SDO.deathDate, death_date)
            return self

        def set_family_name(self, family_name: str) -> "SchemaPerson.Builder":
            self.set(SDO.familyName, family_name)
            return self

        def set_given_name(self, given_name: str) -> "SchemaPerson.Builder":
            self.set(SDO.givenName, given_name)
            return self

        def set_nationality(self, nationality: str) -> "SchemaPerson.Builder":
            self.set(SDO.nationality, nationality)
            return self

    def __init__(self, resource: Resource):
        SchemaModel.__init__(self, resource)
        self.label

    @classmethod
    def builder(cls, *, name: str, uri: Optional[URIRef] = None) -> Builder:
        builder = cls.Builder(Graph().resource(uri if uri is not None else uuid_urn()))
        builder.set(SDO.name, name)
        return builder

    @property
    def label(self) -> str:
        return self._required_label
