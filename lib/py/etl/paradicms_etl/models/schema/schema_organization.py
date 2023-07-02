from typing import Optional

from rdflib import URIRef, Graph, BNode, SDO
from rdflib.resource import Resource

from paradicms_etl.models.organization import Organization
from paradicms_etl.models.schema.schema_model import SchemaModel


class SchemaOrganization(SchemaModel, Organization):
    """
    Schema.org implementation of the Organization interface using schema:Organization properties.
    """

    class Builder(SchemaModel.Builder):
        def build(self):
            return SchemaOrganization(self._resource)

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
