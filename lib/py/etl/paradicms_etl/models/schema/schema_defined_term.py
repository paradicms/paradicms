from typing import Tuple

from rdflib import URIRef, Graph, SDO, RDF
from rdflib.resource import Resource
from rdflib.term import Node

from paradicms_etl.models.concept import Concept
from paradicms_etl.models.schema.schema_named_model import SchemaNamedModel


class SchemaDefinedTerm(SchemaNamedModel, Concept):
    """
    Schema.org implementation of the Concept interface using schema:DefinedTerm properties.
    """

    class Builder(SchemaNamedModel.Builder):
        def add_type_uri(self, type_uri: URIRef):
            self.add(RDF.type, type_uri)
            return self

        def build(self) -> "SchemaDefinedTerm":
            return SchemaDefinedTerm(self._resource)

        def set_value(self, value: Node) -> "SchemaDefinedTerm.Builder":
            self.set(RDF.value, value)
            return self

    def __init__(self, resource: Resource):
        SchemaNamedModel.__init__(self, resource)
        self.name

    @classmethod
    def builder(cls, *, name: str, uri: URIRef) -> Builder:
        builder = cls.Builder(Graph().resource(uri))
        builder.set(SDO.name, name)
        return builder

    @property
    def label(self) -> str:
        return self.name

    @property
    def name(self) -> str:
        return self._required_name

    @property
    def type_uris(self) -> Tuple[URIRef, ...]:
        return tuple(self._values(RDF.type, self._map_uri_value))

    @property
    def uri(self) -> URIRef:
        return super().uri

    @property
    def value(self) -> Node:
        value = self._resource.value(RDF.value)
        if value is None:
            return self.uri
        elif isinstance(value, Resource):
            return value.identifier
        else:
            assert isinstance(value, Node)
            return value
