from typing import Optional, Tuple

from rdflib import DCTERMS
from rdflib.namespace import RDF, RDFS
from rdflib.resource import Resource
from rdflib.term import Node, URIRef

from paradicms_etl.models.named_model import NamedModel
from paradicms_etl.utils.resource_builder import ResourceBuilder


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
        title: Optional[str] = None,
    ) -> "NamedValue":
        if not property_uris:
            raise ValueError("must specify at least one property URI")
        return cls(
            ResourceBuilder(uri)
            .add(DCTERMS.title, title)
            .add(RDF.predicate, property_uris)
            .add(RDF.value, value)
            .build()
        )

    @property
    def property_uris(self) -> Tuple[URIRef, ...]:
        return self._required_uri_values(RDF.predicate)

    @property
    def title(self) -> Optional[str]:
        return self._optional_str_value(DCTERMS.title)

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
