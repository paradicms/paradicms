from __future__ import annotations

from typing import TYPE_CHECKING, Any

from rdflib import SDO, Graph, URIRef

from paradicms_etl.models.collection import Collection
from paradicms_etl.models.schema.schema_creative_work_mixin import (
    SchemaCreativeWorkMixin,
)
from paradicms_etl.models.schema.schema_model import SchemaModel
from paradicms_etl.utils.safe_dict_update import safe_dict_update

if TYPE_CHECKING:
    from rdflib.resource import Resource


class SchemaCollection(SchemaModel, SchemaCreativeWorkMixin, Collection):
    """
    Schema.org implementation of the Collection interface using schema:Collection properties.
    """

    class Builder(
        SchemaModel.Builder, SchemaCreativeWorkMixin.Builder, Collection.Builder
    ):
        def add_work(self, work: URIRef) -> SchemaCollection.Builder:
            self.add(SDO.hasPart, work)
            return self

        def build(self) -> SchemaCollection:
            return SchemaCollection(self._resource)

    def __init__(self, resource: Resource):
        SchemaModel.__init__(self, resource)
        self.label  # noqa: B018

    @classmethod
    def builder(cls, *, name: str, uri: URIRef) -> Builder:
        builder = cls.Builder(Graph().resource(uri))
        builder.set(SDO.name, name)
        return builder

    @classmethod
    def from_collection(cls, collection: Collection) -> SchemaCollection:
        if isinstance(collection, SchemaCollection):
            return collection

        builder = cls.builder(name=collection.label, uri=collection.uri)
        builder.copy_images(collection)
        for work_uri in collection.work_uris:
            builder.add_work(work_uri)
        return builder.build()

    @classmethod
    def json_ld_context(cls) -> dict[str, Any]:
        return safe_dict_update(
            SchemaModel.json_ld_context(),
            {"hasPart": {"@id": str(SDO.hasPart), "@type": "@id"}},
        )

    @property
    def label(self) -> str:
        return self._required_label

    def replacer(self) -> Builder:
        return self.Builder(self.resource)

    @property
    def work_uris(self) -> tuple[URIRef, ...]:
        return tuple(self._values(SDO.hasPart, self._map_term_to_uri))
