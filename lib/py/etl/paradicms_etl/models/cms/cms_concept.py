from typing import Union, Tuple

from rdflib import SKOS
from rdflib.namespace import RDF
from rdflib.resource import Resource
from rdflib.term import Node, URIRef, Literal

from paradicms_etl.models.cms.cms_named_model import CmsNamedModel
from paradicms_etl.models.concept import Concept
from paradicms_etl.models.text import Text
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class CmsConcept(CmsNamedModel, Concept):
    class Builder(CmsNamedModel.Builder):
        def add_alt_label(self, alt_label: Union[str, Literal]) -> "CmsConcept.Builder":
            self.add(SKOS.altLabel, alt_label)
            return self

        def add_type_uri(self, type_uri: URIRef):
            self.add(RDF.type, type_uri)
            return self

        def build(self) -> "CmsConcept":
            return CmsConcept(self._resource)

        def set_definition(self, definition: Union[str, Text]) -> "CmsConcept.Builder":
            self.set(SKOS.definition, definition)
            return self

        def set_pref_label(
            self, pref_label: Union[str, Literal]
        ) -> "CmsConcept.Builder":
            self.set(SKOS.prefLabel, pref_label)
            return self

        def set_value(self, value: Node) -> "CmsConcept.Builder":
            self.set(RDF.value, value)
            return self

    def __init__(self, resource: Resource):
        resource.add(RDF.type, SKOS.Concept)
        CmsNamedModel.__init__(self, resource)
        self.pref_label
        self.value

    @classmethod
    def builder(cls, *, uri: URIRef):
        return cls.Builder(uri=uri)

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            CmsNamedModel.json_ld_context(),
            {
                "altLabel": {"@id": str(SKOS.altLabel)},
                "definition": {"@id": str(SKOS.definition)},
                "prefLabel": {"@id": str(SKOS.prefLabel)},
                "value": {"@id": str(RDF.value)},
            },
        )

    @property
    def label(self):
        return self.pref_label

    @property
    def pref_label(self) -> str:
        return self._required_str_value(SKOS.prefLabel)

    @property
    def type_uris(self) -> Tuple[URIRef, ...]:
        return tuple(self._uri_values(RDF.type))

    @property
    def uri(self) -> URIRef:
        return CmsNamedModel.uri(self)

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
