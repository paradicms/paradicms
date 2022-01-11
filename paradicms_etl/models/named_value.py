from typing import Optional, Tuple

from rdflib.namespace import RDF, RDFS
from rdflib.resource import Resource
from rdflib.term import Literal, Node, URIRef

from paradicms_etl.models.named_model import NamedModel


class NamedValue(NamedModel):
    def __init__(self, *args, **kwds):
        NamedModel.__init__(self, *args, **kwds)
        self.label
        self.property_uris

    @classmethod
    def from_fields(
        cls,
        *,
        property_uris: Tuple[URIRef, ...],  # Child -> parent references
        uri: URIRef,
        value: Node,  # A property value
        label: Optional[str] = None,
    ) -> "NamedValue":
        resource = cls._create_resource(identifier=uri)
        if label is not None:
            resource.add(RDFS.label, Literal(label))
        if not property_uris:
            raise ValueError("must specify at least one property URI")
        for property_uri in property_uris:
            # Not kosher use of rdf:predicate, but I couldn't find a better fit
            resource.add(RDF.predicate, property_uri)
        resource.add(RDF.value, value)
        return cls(resource)

    @property
    def label(self) -> Optional[str]:
        return self._optional_str_value(RDFS.label)

    @property
    def property_uris(self) -> Tuple[URIRef, ...]:
        return self._required_uri_values(RDF.predicate)

    @property
    def value(self) -> Node:
        value = self._resource.value(RDF.value)
        if value is None:
            raise KeyError
        if isinstance(value, Resource):
            return value.identifier
        else:
            assert isinstance(value, Node)
            return value