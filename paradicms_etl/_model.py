from dataclasses import dataclass
from typing import Tuple

from dataclasses_json import LetterCase, dataclass_json
from rdflib import BNode, Graph, Literal, URIRef
from rdflib.resource import Resource


@dataclass_json(letter_case=LetterCase.CAMEL)
@dataclass(frozen=True)
class _Model:
    uri: URIRef

    def _properties_to_rdf(
        self, *, property_definitions, resource: Resource,
    ):
        # PropertyDefinition is a _Model, have to elide the type here to avoid a circular import.
        property_definitions_by_uri = {
            property_definition.uri: property_definition
            for property_definition in property_definitions
        }
        for property_ in self.properties:
            property_definition = property_definitions_by_uri[property_.property_definition_uri]
            if isinstance(property_.value, URIRef):
                resource.add(property_definition.uri, property_.value)
            else:
                resource.add(property_definition.uri, Literal(property_.value))

    def to_rdf(self, *, graph: Graph, property_definitions) -> Resource:
        """
        Convert this model to RDF.
        """
        if self.uri is not None:
            return graph.resource(self.uri)
        else:
            return graph.resource(BNode().skolemize())
