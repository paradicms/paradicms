from __future__ import annotations

from rdflib import RDF, SDO, Graph, URIRef
from rdflib.resource import Resource

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

        def set_value(self, value: float | int) -> SchemaQuantitativeValue.Builder:
            self.set(SDO.value, value)
            return self

    @classmethod
    def builder(cls, *, uri: URIRef | None = None) -> Builder:
        return cls.Builder(Graph().resource(uri if uri is not None else uuid_urn()))

    @property
    def max_value(self) -> float | int | None:
        max_value = self._optional_value(SDO.maxValue, self._map_term_to_literal)
        if max_value is None:
            return max_value
        else:
            max_value_py = max_value.toPython()
            if isinstance(max_value_py, float | int):
                return max_value_py
        return None

    def to_rdf(self, graph: Graph) -> Resource:
        for p in (RDF.type, SDO.maxValue, SDO.value):
            for o in self.resource.graph.objects(subject=self.uri, predicate=p):
                graph.add((self.uri, p, o))
        return graph.resource(self.uri)

    @property
    def value(self) -> float | int | None:
        value = self._optional_value(SDO.value, self._map_term_to_literal)
        if value is None:
            return value
        else:
            value_py = value.toPython()
            if isinstance(value_py, float | int):
                return value_py
        return None
