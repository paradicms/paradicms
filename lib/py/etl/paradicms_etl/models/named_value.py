from typing import Optional, Tuple, Union

from rdflib import DCTERMS, SKOS
from rdflib.namespace import RDF
from rdflib.resource import Resource
from rdflib.term import Node, URIRef, Literal

from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.models.text import Text
from paradicms_etl.utils.resource_builder import ResourceBuilder
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class NamedValue(ResourceBackedNamedModel):
    def __init__(self, resource: Resource):
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

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            ResourceBackedNamedModel.json_ld_context(),
            {
                "abstract": {"@id": str(DCTERMS.abstract)},
                "altLabel": {"@id": str(SKOS.altLabel)},
                "property": {"@id": str(RDF.predicate), "@type": "@id"},
                "title": {"@id": str(DCTERMS.title)},
                "value": {"@id": str(RDF.value)},
            },
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