from dataclasses import dataclass

from dataclasses_json import LetterCase, dataclass_json
from rdflib import Graph, RDF, URIRef
from rdflib.resource import Resource

from paradicms_etl._model import _Model
from paradicms_etl.namespace import CMS


@dataclass_json(letter_case=LetterCase.CAMEL)
@dataclass(frozen=True)
class _NamedModel(_Model):
    uri: URIRef

    def to_rdf(self, *, graph: Graph, property_definitions) -> Resource:
        """
        Convert this model to RDF.
        """

        resource = graph.resource(self.uri)
        resource.add(RDF.type, CMS[self.__class__.__name__])
        return resource
