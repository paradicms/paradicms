from __future__ import annotations

from rdflib import RDF, SDO, Graph, URIRef
from rdflib.resource import Resource
from rdflib.term import Node

from paradicms_etl.models.concept import Concept
from paradicms_etl.models.schema.schema_model import SchemaModel


class SchemaDefinedTerm(SchemaModel, Concept):
    """
    Schema.org implementation of the Concept interface using schema:DefinedTerm properties.
    """

    class Builder(SchemaModel.Builder):
        def add_type_uri(self, type_uri: URIRef) -> SchemaDefinedTerm.Builder:
            self.add(RDF.type, type_uri)
            return self

        def build(self) -> SchemaDefinedTerm:
            return SchemaDefinedTerm(self._resource)

        def set_value(self, value: Node) -> SchemaDefinedTerm.Builder:
            self.set(RDF.value, value)
            return self

    def __init__(self, resource: Resource):
        SchemaModel.__init__(self, resource)
        self.label  # noqa: B018

    @classmethod
    def builder(cls, *, name: str, uri: URIRef) -> Builder:
        builder = cls.Builder(Graph().resource(uri))
        builder.set(SDO.name, name)
        return builder

    @classmethod
    def from_concept(cls, concept: Concept) -> SchemaDefinedTerm:
        if isinstance(concept, SchemaDefinedTerm):
            return concept

        builder = cls.builder(name=concept.label, uri=concept.uri)
        for type_uri in concept.type_uris:
            if type_uri != concept.rdf_type_uri():
                builder.add_type_uri(type_uri)
        if concept.value != concept.uri:
            builder.set_value(concept.value)
        return builder.build()

    @property
    def label(self) -> str:
        return self._required_label

    @property
    def type_uris(self) -> tuple[URIRef, ...]:
        return tuple(self._values(RDF.type, self._map_term_to_uri))

    @property
    def value(self) -> Node:
        value = self._resource.value(RDF.value)
        if value is None:
            return self.uri
        if isinstance(value, Resource):
            return value.identifier
        assert isinstance(value, Node)
        return value
