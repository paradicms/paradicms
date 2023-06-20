from typing import Optional

from rdflib import URIRef, Graph, BNode, SDO

from paradicms_etl.models.organization import Organization
from paradicms_etl.models.schema.schema_agent import SchemaAgent


class SchemaOrganization(SchemaAgent, Organization):
    """
    Schema.org implementation of the Organization interface using schema:Organization properties.
    """

    class Builder(SchemaAgent.Builder):
        def build(self):
            return SchemaOrganization(self._resource)

    @classmethod
    def builder(cls, *, name: str, uri: Optional[URIRef] = None) -> Builder:
        builder = cls.Builder(Graph().resource(uri if uri is not None else BNode()))
        builder.set(SDO.name, name)
        return builder
