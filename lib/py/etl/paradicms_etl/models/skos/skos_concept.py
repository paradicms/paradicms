from typing import Union, Tuple

from rdflib import SKOS, Graph
from rdflib.namespace import RDF
from rdflib.resource import Resource
from rdflib.term import Node, URIRef, Literal

from paradicms_etl.models.concept import Concept
from paradicms_etl.models.foaf.foaf_images_mixin import FoafImagesMixin
from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.models.text import Text
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class SkosConcept(ResourceBackedNamedModel, FoafImagesMixin, Concept):
    class Builder(ResourceBackedNamedModel.Builder, FoafImagesMixin.Builder):
        def add_alt_label(
            self, alt_label: Union[str, Literal]
        ) -> "SkosConcept.Builder":
            self.add(SKOS.altLabel, alt_label)
            return self

        def add_type_uri(self, type_uri: URIRef):
            self.add(RDF.type, type_uri)
            return self

        def build(self) -> "SkosConcept":
            return SkosConcept(self._resource)

        def set_definition(self, definition: Union[str, Text]) -> "SkosConcept.Builder":
            self.set(SKOS.definition, definition)
            return self

        def set_value(self, value: Node) -> "SkosConcept.Builder":
            self.set(RDF.value, value)
            return self

    def __init__(self, resource: Resource):
        resource.add(RDF.type, SKOS.Concept)
        ResourceBackedNamedModel.__init__(self, resource)
        self.label

    @classmethod
    def builder(cls, *, pref_label: str, uri: URIRef) -> Builder:
        builder = cls.Builder(Graph().resource(uri))
        builder.set(SKOS.prefLabel, pref_label)
        return builder

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            ResourceBackedNamedModel.json_ld_context(),
            FoafImagesMixin.json_ld_context(),
            {
                "altLabel": {"@id": str(SKOS.altLabel)},
                "definition": {"@id": str(SKOS.definition)},
                "prefLabel": {"@id": str(SKOS.prefLabel)},
                "value": {"@id": str(RDF.value)},
            },
        )

    @property
    def label(self):
        return self._required_label

    @classmethod
    def label_property_uri(cls) -> URIRef:
        return SKOS.prefLabel

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return SKOS.Concept

    @property
    def type_uris(self) -> Tuple[URIRef, ...]:
        return tuple(self._values(RDF.type, self._map_uri_value))

    @property
    def uri(self) -> URIRef:
        return super().uri

    @property
    def value(self) -> Node:
        value = self._resource.value(RDF.value)
        if value is None:
            return self.uri
        elif isinstance(value, Resource):
            return value.identifier
        else:
            assert isinstance(value, Node)
            return value
