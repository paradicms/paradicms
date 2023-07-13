from typing import Optional

from rdflib import Graph, SDO
from rdflib.resource import Resource

from paradicms_etl.models.rights_mixin import RightsMixin
from paradicms_etl.models.schema.schema_media_object_mixin import (
    SchemaMediaObjectMixin,
)
from paradicms_etl.models.schema.schema_model import SchemaModel
from paradicms_etl.models.text import Text
from paradicms_etl.namespaces import CMS
from paradicms_etl.utils.uuid_urn import uuid_urn


class SchemaTextObject(SchemaModel, SchemaMediaObjectMixin, Text):
    """
    Schema.org implementation of the Text interface using schema:TextObject properties.

    See note in SchemaMediaObjectMixin re: why this uses SchemaMediaObjectMixin and doesn't inherit
    SchemaCreativeWork.
    """

    class Builder(SchemaModel.Builder, SchemaMediaObjectMixin.Builder, Text.Builder):
        def build(self) -> "SchemaTextObject":
            return SchemaTextObject(self._resource)

        def copy_rights(self, other: RightsMixin) -> "SchemaTextObject.Builder":
            SchemaMediaObjectMixin.Builder.copy_rights(self, other)
            return self

    def __init__(self, resource: Resource):
        SchemaModel.__init__(self, resource)
        self.value

    @classmethod
    def builder(cls, text: str) -> Builder:
        builder = cls.Builder(Graph().resource(uuid_urn()))
        builder.set(SDO.text, text)
        return builder

    @property
    def caption(self) -> Optional[str]:
        return self._optional_value(SDO.caption, self._map_str_value)

    @property
    def copyable(self) -> bool:
        copyable = self._optional_value(CMS.imageCopyable, self._map_bool_value)
        return copyable if copyable is not None else True

    @property
    def text(self) -> str:
        return self._required_value(SDO.text, self._map_str_value)

    @property
    def value(self) -> str:
        return self.text
