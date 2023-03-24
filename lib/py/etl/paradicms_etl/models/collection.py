from typing import Union

from rdflib import URIRef, FOAF
from rdflib.namespace import DCTERMS
from rdflib.resource import Resource

from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.models.text import Text
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class Collection(ResourceBackedNamedModel):
    LABEL_PROPERTY = DCTERMS.title

    class Builder(ResourceBackedNamedModel.Builder):
        def __init__(self, *, title: str, uri: URIRef):
            ResourceBackedNamedModel.Builder.__init__(self, uri=uri)
            self.set(DCTERMS.title, title)

        def build(self) -> "Collection":
            return Collection(self._resource)

        def set_description(self, description: Union[str, Text]) -> "Builder":
            self.set(DCTERMS.description, description)
            return self

    def __init__(self, resource: Resource):
        ResourceBackedNamedModel.__init__(self, resource)
        self.title

    @classmethod
    def builder(cls, *, title: str, uri: URIRef) -> Builder:
        return cls.Builder(title=title, uri=uri)

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            ResourceBackedNamedModel.json_ld_context(),
            {
                "description": {"@id": str(DCTERMS.description)},
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
