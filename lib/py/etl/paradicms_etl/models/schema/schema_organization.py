from __future__ import annotations

from typing import TYPE_CHECKING

from rdflib import SDO, Graph, URIRef

from paradicms_etl.models.organization import Organization
from paradicms_etl.models.schema.schema_model import SchemaModel
from paradicms_etl.utils.uuid_urn import uuid_urn

if TYPE_CHECKING:
    from rdflib.resource import Resource


class SchemaOrganization(SchemaModel, Organization):
    """
    Schema.org implementation of the Organization interface using schema:Organization properties.
    """

    class Builder(SchemaModel.Builder):
        def build(self) -> SchemaOrganization:
            return SchemaOrganization(self._resource)

    def __init__(self, resource: Resource):
        SchemaModel.__init__(self, resource)
        self.label

    @classmethod
    def builder(cls, *, name: str, uri: URIRef | None = None) -> Builder:
        builder = cls.Builder(Graph().resource(uri if uri is not None else uuid_urn()))
        builder.set(SDO.name, name)
        return builder

    @classmethod
    def from_organization(cls, organization: Organization) -> SchemaOrganization:
        return cls.builder(name=organization.label, uri=organization.uri).build()

    @property
    def label(self) -> str:
        return self._required_label
