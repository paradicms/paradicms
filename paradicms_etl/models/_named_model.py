from dataclasses import dataclass

from dataclasses_json import LetterCase, dataclass_json
from rdflib import Graph, URIRef
from rdflib.resource import Resource

from paradicms_etl._model import _Model


@dataclass_json(letter_case=LetterCase.CAMEL)
@dataclass(frozen=True)
class _NamedModel(_Model):
    uri: URIRef

    def to_rdf(self, *, graph: Graph, property_definitions) -> Resource:
        """
        Convert this model to RDF.
        """
        return graph.resource(self.uri)
