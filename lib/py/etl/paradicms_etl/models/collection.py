from typing import Tuple, Union

from rdflib import URIRef, FOAF
from rdflib.namespace import DCTERMS
from rdflib.resource import Resource

from paradicms_etl.models.property import Property
from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.models.text import Text
from paradicms_etl.utils.resource_builder import ResourceBuilder
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class Collection(ResourceBackedNamedModel):
    LABEL_PROPERTY = DCTERMS.title

    def __init__(self, resource: Resource):
        ResourceBackedNamedModel.__init__(self, resource)
        self.title

    @classmethod
    def from_fields(
        cls,
        *,
        title: str,
        uri: URIRef,
        abstract: Union[str, Text, None] = None,
        properties: Tuple[Property, ...] = ()
    ) -> "Collection":
        return cls(
            ResourceBuilder(uri)
            .add(DCTERMS.abstract, abstract)
            .add(DCTERMS.title, title)
            .add_properties(properties)
            .build()
        )

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            ResourceBackedNamedModel.json_ld_context(),
            {
                "abstract": {"@id": str(DCTERMS.abstract)},
                "page": {"@id": str(FOAF.page), "@type": "@id"},
                "title": {"@id": str(DCTERMS.title)},
            },
        )

    @property
    def label(self) -> str:
        return self.title

    @property
    def title(self) -> str:
        return self._required_str_value(DCTERMS.title)
