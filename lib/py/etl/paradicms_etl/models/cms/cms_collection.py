from typing import Union, Tuple

from rdflib import URIRef, FOAF, Graph
from rdflib.namespace import DCTERMS

from paradicms_etl.models.cms.cms_images_mixin import CmsImagesMixin
from paradicms_etl.models.cms.cms_named_model import CmsNamedModel
from paradicms_etl.models.collection import Collection
from paradicms_etl.models.text import Text
from paradicms_etl.models.work import Work
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class CmsCollection(CmsNamedModel, CmsImagesMixin, Collection):
    class Builder(CmsNamedModel.Builder, CmsImagesMixin.Builder, Collection.Builder):
        def add_work(self, work: Union[Work, URIRef]) -> "CmsCollection.Builder":
            self.add(DCTERMS.hasPart, work)
            return self

        def build(self) -> "CmsCollection":
            return CmsCollection(self._resource)

        def set_description(
            self, description: Union[str, Text]
        ) -> "CmsCollection.Builder":
            self.set(DCTERMS.description, description)
            return self

        def set_label(self, label: str) -> "CmsCollection.Builder":
            self.set(DCTERMS.title, label)
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
            CmsImagesMixin.json_ld_context(),
            {
                "description": {"@id": str(DCTERMS.description)},
                "hasPart": {"@id": str(DCTERMS.hasPart)},
                "page": {"@id": str(FOAF.page), "@type": "@id"},
                "title": {"@id": str(DCTERMS.title)},
            },
        )

    @property
    def label(self) -> str:
        return self.title

    def replacer(self) -> Builder:
        return self.Builder(self._resource)

    @property
    def title(self) -> str:
        return self._required_value(DCTERMS.title, self._map_str_value)

    @property
    def uri(self) -> URIRef:
        return super().uri

    @property
    def work_uris(self) -> Tuple[URIRef, ...]:
        return tuple(self._values(DCTERMS.hasPart, self._map_uri_value))
