from rdflib import URIRef, Graph, SDO

from paradicms_etl.models.image import Image
from paradicms_etl.models.schema.schema_creative_work_mixin import (
    SchemaCreativeWorkMixin,
)
from paradicms_etl.models.schema.schema_named_model import SchemaNamedModel


class SchemaImage(SchemaNamedModel, SchemaCreativeWorkMixin, Image):
    class Builder(
        SchemaNamedModel.Builder, SchemaCreativeWorkMixin.Builder, Image.Builder
    ):
        def build(self) -> "SchemaImage":
            return SchemaImage(self._resource)

    @classmethod
    def builder(cls, *, uri: URIRef) -> Builder:
        return cls.Builder(Graph().resource(uri))

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return SDO.ImageObject

    @property
    def uri(self) -> URIRef:
        return super().uri
