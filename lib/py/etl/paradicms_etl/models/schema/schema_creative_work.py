from typing import Optional, Union

from rdflib import SDO, Graph, URIRef
from rdflib.resource import Resource

from paradicms_etl.models.date_time_union import DateTimeUnion
from paradicms_etl.models.schema.schema_creative_work_mixin import (
    SchemaCreativeWorkMixin,
)
from paradicms_etl.models.schema.schema_model import SchemaModel
from paradicms_etl.models.text import Text
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

    @property
    def description(self) -> Union[str, Text, None]:
        return self._optional_value(SDO.description, self._map_term_to_str_or_text)

    @property
    def encoding_format(self) -> Optional[str]:
        return self._optional_value(SDO.encodingFormat, self._map_term_to_str)

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

    @property
    def text(self) -> Union[str, Text, None]:
        return self._optional_value(SDO.text, self._map_term_to_str_or_text)
