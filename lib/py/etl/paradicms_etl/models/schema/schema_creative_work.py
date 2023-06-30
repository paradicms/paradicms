from rdflib import URIRef, SDO, Graph
from rdflib.resource import Resource

from paradicms_etl.models.schema.schema_creative_work_mixin import (
    SchemaCreativeWorkMixin,
)
from paradicms_etl.models.schema.schema_named_model import SchemaNamedModel
from paradicms_etl.models.work import Work
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class SchemaCreativeWork(SchemaNamedModel, SchemaCreativeWorkMixin, Work):
    """
    Schema.org implementation of the Work interface using schema:CreativeWork properties.

    See note in SchemaCreativeWorkMixin re: why the two are separate.
    """

    class Builder(
        SchemaNamedModel.Builder, SchemaCreativeWorkMixin.Builder, Work.Builder
    ):
        def build(self) -> "SchemaCreativeWork":
            return SchemaCreativeWork(self._resource)

    def __init__(self, resource: Resource):
        SchemaNamedModel.__init__(self, resource)
        self.name

    @classmethod
    def builder(cls, *, name: str, uri: URIRef) -> Builder:
        builder = cls.Builder(Graph().resource(uri))
        builder.set(SDO.name, name)
        return builder

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            SchemaNamedModel.json_ld_context(),
            SchemaCreativeWorkMixin.json_ld_context(),
        )

    @property
    def label(self) -> str:
        return self.name

    @property
    def name(self) -> str:
        return self._required_name

    def replacer(self) -> Builder:
        return self.Builder(self._resource)

    @property
    def uri(self) -> URIRef:
        return super().uri
