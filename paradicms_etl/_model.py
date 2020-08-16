from dataclasses import dataclass
from typing import Tuple

from dataclasses_json import LetterCase, dataclass_json
from rdflib import BNode, Graph, Literal, URIRef
from rdflib.resource import Resource

from paradicms_etl.models.property import Property
from paradicms_etl.models.property_definitions import PropertyDefinitions


@dataclass_json(letter_case=LetterCase.CAMEL)
@dataclass(frozen=True)
class _Model:
    uri: URIRef

    def _properties_to_rdf(self, *, properties: Tuple[Property, ...], resource: Resource):
        for property_ in self.properties:
            property_definition = getattr(PropertyDefinitions, property_.key.upper())
            if isinstance(property_.value, URIRef):
                resource.add(property_definition.uri, property_.value)
            else:
                resource.add(property_definition.uri, Literal(property_.value))

    def to_rdf(self, *, graph: Graph) -> Resource:
        """
        Convert this model to RDF.
        """
        if self.uri is not None:
            return graph.resource(self.uri)
        else:
            return graph.resource(BNode().skolemize())
