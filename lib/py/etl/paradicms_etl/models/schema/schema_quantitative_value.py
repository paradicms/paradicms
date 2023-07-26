from typing import Union, Optional

from rdflib import SDO, URIRef, Graph

from paradicms_etl.models.schema.schema_model import SchemaModel
from paradicms_etl.utils.uuid_urn import uuid_urn


class SchemaQuantitativeValue(SchemaModel):
    class Builder(SchemaModel.Builder):
        def build(self) -> "SchemaQuantitativeValue":
            return SchemaQuantitativeValue(self._resource)

        def set_max_value(
            self, max_value: Union[float, int]
        ) -> "SchemaQuantitativeValue.Builder":
            self.set(SDO.maxValue, max_value)
            return self

        def set_value(
            self, value: Union[float, int]
        ) -> "SchemaQuantitativeValue.Builder":
            self.set(SDO.value, value)
            return self

    @classmethod
    def builder(cls, *, uri: Optional[URIRef] = None) -> Builder:
        return cls.Builder(Graph().resource(uri if uri is not None else uuid_urn()))
