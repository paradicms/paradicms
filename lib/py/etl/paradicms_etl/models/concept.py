from typing import Union

from rdflib import SKOS
from rdflib.namespace import RDF
from rdflib.resource import Resource
from rdflib.term import Node, URIRef, Literal

from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.models.text import Text
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class Concept(ResourceBackedNamedModel):
    class Builder(ResourceBackedNamedModel.Builder):
        def __init__(self, *, uri: URIRef, value: Node):
            ResourceBackedNamedModel.Builder.__init__(self, uri=uri)
            self.add(RDF.value, value)

        def add_alt_label(self, alt_label: Union[str, Literal]) -> "Concept.Builder":
            self.add(SKOS.altLabel, alt_label)
            return self

        def build(self) -> "Concept":
            return Concept(self._resource)

        def set_definition(self, definition: Union[str, Text]) -> "Concept.Builder":
            self.set(SKOS.definition, definition)
            return self

        def set_pref_label(self, pref_label: Union[str, Literal]) -> "Concept.Builder":
            self.set(SKOS.prefLabel, pref_label)
            return self

    def __init__(self, resource: Resource):
        resource.add(RDF.type, SKOS.Concept)
        ResourceBackedNamedModel.__init__(self, resource)
        self.label

    @classmethod
    def builder(cls, *, uri: URIRef, value: Node):
        return cls.Builder(uri=uri, value=value)

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            ResourceBackedNamedModel.json_ld_context(),
            {
                "altLabel": {"@id": str(SKOS.altLabel)},
                "definition": {"@id": str(SKOS.definition)},
                "prefLabel": {"@id": str(SKOS.prefLabel)},
                "value": {"@id": str(RDF.value)},
            },
        )

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
