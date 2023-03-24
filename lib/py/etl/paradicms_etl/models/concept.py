from typing import Optional, Tuple, Union

from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.models.text import Text
from paradicms_etl.utils.resource_builder import ResourceBuilder
from paradicms_etl.utils.safe_dict_update import safe_dict_update
from rdflib import SKOS
from rdflib.namespace import RDF
from rdflib.resource import Resource
from rdflib.term import Node, URIRef, Literal


class Concept(ResourceBackedNamedModel):
    class Builder(ResourceBackedNamedModel.Builder):
        def __init__(
            self, *, property_uris: Tuple[URIRef, ...], uri: URIRef, value: Node
        ):
            ResourceBackedNamedModel.Builder.__init__(self, uri=uri)
            if not property_uris:
                raise ValueError("must specify at least one property URI")
            self.add(RDF.predicate, property_uris)
            self.add(RDF.value, value)

        def add_alt_label(self, alt_label: Union[str, Literal]) -> "Builder":
            self.add(SKOS.altLabel, alt_label)
            return self

        def build(self) -> "Concept":
            return Concept(self._resource)

        def set_definition(self, definition: Union[str, Text]) -> "Builder":
            self.set(SKOS.definition, definition)
            return self

        def set_pref_label(self, pref_label: Union[str, Literal]) -> "Builder":
            self.set(SKOS.prefLabel, alt_label)
            return self

    def __init__(self, resource: Resource):
        resource.add(RDF.type, SKOS.Concept)
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
        definition: Union[str, Text, None] = None,
        alt_labels: Tuple[Union[str, Literal], ...] = None,
        pref_label: Optional[str] = None,
    ) -> "Concept":
        if not property_uris:
            raise ValueError("must specify at least one property URI")
        return cls(
            ResourceBuilder(uri)
            .add(SKOS.definition, definition)
            .add(RDF.predicate, property_uris)
            .add(RDF.value, value)
            .add(SKOS.altLabel, alt_labels)
            .add(SKOS.prefLabel, pref_label)
            .build()
        )

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            ResourceBackedNamedModel.json_ld_context(),
            {
                "altLabel": {"@id": str(SKOS.altLabel)},
                "definition": {"@id": str(SKOS.definition)},
                "prefLabel": {"@id": str(SKOS.prefLabel)},
                "property": {"@id": str(RDF.predicate), "@type": "@id"},
                "value": {"@id": str(RDF.value)},
            },
        )

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
