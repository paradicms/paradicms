from typing import Optional, Tuple, Union

from rdflib import DCTERMS, SKOS
from rdflib.namespace import RDF
from rdflib.resource import Resource
from rdflib.term import Node, URIRef, Literal

from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.models.text import Text
from paradicms_etl.namespaces import CMS
from paradicms_etl.utils.resource_builder import ResourceBuilder


class NamedValue(ResourceBackedNamedModel):
    JSON_LD_CONTEXT = {"@vocab": str(DCTERMS)}

    def __init__(self, resource: Resource):
        resource.add(RDF.type, CMS[self.__class__.__name__])
        ResourceBackedNamedModel.__init__(self, resource)
        self.label
        self.property_uris

    @classmethod
    def from_fields(
        cls,
        *,
        property_uris: Tuple[URIRef, ...],  # Child -> parent references
        uri: URIRef,
        value: Node,  # A property value
        abstract: Union[str, Text, None] = None,
        alt_labels: Tuple[Union[str, Literal], ...] = None,
        title: Optional[str] = None,
    ) -> "NamedValue":
        if not property_uris:
            raise ValueError("must specify at least one property URI")
        return cls(
            ResourceBuilder(uri)
            .add(DCTERMS.abstract, abstract)
            .add(DCTERMS.title, title)
            .add(RDF.predicate, property_uris)
            .add(RDF.value, value)
            .add(SKOS.altLabel, alt_labels)
            .add(SKOS.prefLabel, title)
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
