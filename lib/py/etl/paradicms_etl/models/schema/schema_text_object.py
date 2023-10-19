from __future__ import annotations

from typing import TYPE_CHECKING

from rdflib import SDO, Graph
from rdflib.resource import Resource

from paradicms_etl.models.schema.schema_media_object_mixin import SchemaMediaObjectMixin
from paradicms_etl.models.schema.schema_model import SchemaModel
from paradicms_etl.models.text import Text
from paradicms_etl.namespaces import CMS
from paradicms_etl.utils.uuid_urn import uuid_urn

if TYPE_CHECKING:
    from rdflib.resource import Resource


class SchemaTextObject(SchemaModel, SchemaMediaObjectMixin, Text):
    """
    Schema.org implementation of the Text interface using schema:TextObject properties.

    See note in SchemaMediaObjectMixin re: why this uses SchemaMediaObjectMixin and doesn't inherit
    SchemaCreativeWork.
    """

    class Builder(SchemaModel.Builder, SchemaMediaObjectMixin.Builder, Text.Builder):
        def build(self) -> SchemaTextObject:
            return SchemaTextObject(self._resource)

    def __init__(self, resource: Resource):
        SchemaModel.__init__(self, resource)
        self.value

    @classmethod
    def builder(cls, text: str) -> Builder:
        builder = cls.Builder(Graph().resource(uuid_urn()))
        builder.set(SDO.text, text)
        return builder

    @property
    def caption(self) -> str | None:
        return self._optional_value(SDO.caption, self._map_term_to_str)

    @property
    def copyable(self) -> bool:
        copyable = self._optional_value(CMS.imageCopyable, self._map_term_to_bool)
        return copyable if copyable is not None else True

    @classmethod
    def from_text(cls, text: Text) -> SchemaTextObject:
        if isinstance(text, SchemaTextObject):
            return text
        builder = cls.builder(text.value)
        builder.copy_rights(text)
        return builder.build()

    @property
    def text(self) -> str:
        return self._required_value(SDO.text, self._map_term_to_str)

    def to_rdf(self, graph: Graph) -> Resource:
        # Don't try to curate the RDF
        return super().to_rdf(graph)

    @property
    def value(self) -> str:
        return self.text
