from __future__ import annotations

from typing import TYPE_CHECKING

from rdflib import SDO, Graph, URIRef

from paradicms_etl.models.person import Person
from paradicms_etl.models.schema.schema_model import SchemaModel
from paradicms_etl.utils.uuid_urn import uuid_urn

if TYPE_CHECKING:
    from rdflib.resource import Resource

    from paradicms_etl.models.date_time_union import DateTimeUnion


class SchemaPerson(SchemaModel, Person):
    """
    Schema.org implementation of the Person interface using schema:Person properties.
    """

    class Builder(SchemaModel.Builder):
        def build(self) -> SchemaPerson:
            return SchemaPerson(self._resource)

        def set_birth_date(self, birth_date: DateTimeUnion) -> SchemaPerson.Builder:
            self.set(SDO.birthDate, birth_date)
            return self

        def set_death_date(self, death_date: DateTimeUnion) -> SchemaPerson.Builder:
            self.set(SDO.deathDate, death_date)
            return self

        def set_family_name(self, family_name: str) -> SchemaPerson.Builder:
            self.set(SDO.familyName, family_name)
            return self

        def set_given_name(self, given_name: str) -> SchemaPerson.Builder:
            self.set(SDO.givenName, given_name)
            return self

        def set_nationality(self, nationality: str) -> SchemaPerson.Builder:
            self.set(SDO.nationality, nationality)
            return self

    def __init__(self, resource: Resource):
        SchemaModel.__init__(self, resource)
        self.label

    @classmethod
    def builder(cls, *, name: str, uri: URIRef | None = None) -> Builder:
        builder = cls.Builder(Graph().resource(uri if uri is not None else uuid_urn()))
        builder.set(SDO.name, name)
        return builder

    @classmethod
    def from_person(cls, person: Person) -> SchemaPerson:
        builder = cls.builder(name=person.label, uri=person.uri)
        if person.family_name is not None:
            builder.set_family_name(person.family_name)
        if person.given_name is not None:
            builder.set_given_name(person.given_name)
        return builder.build()

    @property
    def family_name(self) -> str | None:
        return self._optional_value(SDO.familyName, self._map_term_to_str)

    @property
    def given_name(self) -> str | None:
        return self._optional_value(SDO.givenName, self._map_term_to_str)

    @property
    def label(self) -> str:
        return self._required_label
