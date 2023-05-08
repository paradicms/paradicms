from typing import Union

from rdflib import URIRef, FOAF, Graph
from rdflib.namespace import DCTERMS

from paradicms_etl.models.cms.cms_named_model import CmsNamedModel
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.text import Text
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class CmsCollection(CmsNamedModel, Collection):
    class Builder(CmsNamedModel.Builder):
        def build(self) -> "CmsCollection":
            return CmsCollection(self._resource)

        def set_description(
            self, description: Union[str, Text]
        ) -> "CmsCollection.Builder":
            self.set(DCTERMS.description, description)
            return self

    def __init__(self, *args, **kwds):
        CmsNamedModel.__init__(self, *args, **kwds)
        self.title

    @classmethod
    def builder(cls, *, title: str, uri: URIRef) -> Builder:
        builder = cls.Builder(Graph().resource(uri))
        builder.set(DCTERMS.title, title)
        return builder

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            CmsNamedModel.json_ld_context(),
            {
                "description": {"@id": str(DCTERMS.description)},
                "page": {"@id": str(FOAF.page), "@type": "@id"},
                "title": {"@id": str(DCTERMS.title)},
            },
        )

    @property
    def label(self) -> str:
        return self.title

    @classmethod
    def label_property_uri(cls):
        return DCTERMS.title

    @property
    def title(self) -> str:
        return self._required_str_value(DCTERMS.title)

    @property
    def uri(self) -> URIRef:
        return super().uri
