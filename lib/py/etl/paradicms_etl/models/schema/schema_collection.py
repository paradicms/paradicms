from typing import Union, Tuple

from rdflib import URIRef, Graph, SDO
from rdflib.resource import Resource

from paradicms_etl.models.collection import Collection
from paradicms_etl.models.schema.schema_creative_work_mixin import (
    SchemaCreativeWorkMixin,
)
from paradicms_etl.models.schema.schema_named_model import SchemaNamedModel
from paradicms_etl.models.work import Work
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class SchemaCollection(SchemaNamedModel, SchemaCreativeWorkMixin, Collection):
    """
    Schema.org implementation of the Collection interface using schema:Collection properties.
    """

    class Builder(
        SchemaNamedModel.Builder, SchemaCreativeWorkMixin.Builder, Collection.Builder
    ):
        def add_work(self, work: Union[URIRef, Work]) -> "SchemaCollection.Builder":
            self.add(SDO.hasPart, work)
            return self

        def build(self) -> "SchemaCollection":
            return SchemaCollection(self._resource)

    def __init__(self, resource: Resource):
        SchemaNamedModel.__init__(self, resource)
        self.label

    @classmethod
    def builder(cls, *, name: str, uri: URIRef) -> Builder:
        builder = cls.Builder(Graph().resource(uri))
        builder.set(SDO.name, name)
        return builder

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            SchemaNamedModel.json_ld_context(),
            {"hasPart": {"@id": str(SDO.hasPart), "@type": "@id"}},
        )

    @property
    def label(self) -> str:
        return self._required_label

    def replacer(self) -> Builder:
        return self.Builder(self._resource)

    @property
    def uri(self) -> URIRef:
        return super().uri

    @property
    def work_uris(self) -> Tuple[URIRef, ...]:
        return tuple(self._values(SDO.hasPart, self._map_uri_value))
