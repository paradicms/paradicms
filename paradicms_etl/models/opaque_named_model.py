from dataclasses import dataclass
from typing import Optional, Tuple

from rdflib import Graph, RDF, URIRef
from rdflib.resource import Resource

from paradicms_etl.models._named_model import _NamedModel
from paradicms_etl.models.property import Property


@dataclass(frozen=True)
class OpaqueNamedModel(_NamedModel):
    """
    A model that simply passes through properties.

    Used to send RDF directly to the loader rather than deserializing it into a dataclass and reserializing it (#149).
    """

    type: URIRef
    properties: Tuple[Property, ...] = ()

    def to_rdf(self, *, graph: Graph) -> Resource:
        # Don't call the superclass, since it would add an rdf:type with the __class__.__name__
        resource = graph.resource(self.uri)
        for property_ in self.properties:
            resource.add(property_.uri, property_.value)
        resource.add(RDF.type, self.type)
        return resource
