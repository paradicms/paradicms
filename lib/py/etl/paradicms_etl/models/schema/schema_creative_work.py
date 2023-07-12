from rdflib import URIRef, SDO, Graph
from rdflib.resource import Resource

from paradicms_etl.models.schema.schema_creative_work_mixin import (
    SchemaCreativeWorkMixin,
)
from paradicms_etl.models.schema.schema_model import SchemaModel
from paradicms_etl.models.work import Work
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class SchemaCreativeWork(SchemaModel, SchemaCreativeWorkMixin, Work):
    """
    Schema.org implementation of the Work interface using schema:CreativeWork properties.

    See note in SchemaCreativeWorkMixin re: why the two are separate.
    """

    class Builder(SchemaModel.Builder, SchemaCreativeWorkMixin.Builder, Work.Builder):
        def build(self) -> "SchemaCreativeWork":
            return SchemaCreativeWork(self._resource)

    def __init__(self, resource: Resource):
        SchemaModel.__init__(self, resource)
        self.label

    @classmethod
    def builder(cls, *, name: str, uri: URIRef) -> Builder:
        builder = cls.Builder(Graph().resource(uri))
        builder.set(SDO.name, name)
        return builder

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            SchemaModel.json_ld_context(),
            SchemaCreativeWorkMixin.json_ld_context(),
        )

    @property
    def label(self) -> str:
        return self._required_label

    def replacer(self) -> Builder:
        return self.Builder(self._resource)
