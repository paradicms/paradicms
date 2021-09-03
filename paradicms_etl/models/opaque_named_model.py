from typing import Tuple

from rdflib import RDF, URIRef

from paradicms_etl._model import _Model
from paradicms_etl.models.property import Property


class OpaqueNamedModel(_Model):
    """
    A model that simply passes through properties.

    Used to send RDF directly to the loader rather than deserializing it into a dataclass and reserializing it (#149).

    It's not a subclass of _NamedModel, since it needs to specified its own rdf:type.
    """

    def __init__(
        self, *, type: URIRef, uri: URIRef, properties: Tuple[Property, ...] = ()
    ):
        _Model.__init__(self, uri=uri)
        for property_ in properties:
            self.resource.add(property_.uri, property_.value)
        self.resource.add(RDF.type, type)

    @property
    def uri(self) -> URIRef:
        return self.resource.identifier
