from __future__ import annotations

from rdflib import SDO, Graph, URIRef

from paradicms_etl.models.schema.schema_model import SchemaModel
from paradicms_etl.utils.uuid_urn import uuid_urn


class SchemaQuantitativeValue(SchemaModel):
    class Builder(SchemaModel.Builder):
        def build(self) -> SchemaQuantitativeValue:
            return SchemaQuantitativeValue(self._resource)

        def set_max_value(
            self, max_value: float | int
        ) -> SchemaQuantitativeValue.Builder:
            self.set(SDO.maxValue, max_value)
            return self

        def set_value(self, value: float | int) -> "SchemaQuantitativeValue.Builder":
            self.set(SDO.value, value)
            return self

    @classmethod
    def builder(cls, *, uri: URIRef | None = None) -> Builder:
        return cls.Builder(Graph().resource(uri if uri is not None else uuid_urn()))

    @property
    def max_value(self) -> float | int | None:
        max_value = self._optional_value(SDO.maxValue, self._map_term_to_literal)
        if max_value is None or isinstance(max_value, float | int):
            return max_value
        return None

    @property
    def value(self) -> float | int | None:
        value = self._optional_value(SDO.value, self._map_term_to_literal)
        if value is None or isinstance(value, float | int):
            return value
        return None
