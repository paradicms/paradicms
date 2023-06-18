from typing import Union, Tuple

from rdflib import URIRef, Graph, OWL
from rdflib.namespace import DCTERMS, FOAF
from rdflib.resource import Resource

from paradicms_etl.models.cms.cms_images_mixin import CmsImagesMixin
from paradicms_etl.models.cms.cms_named_model import CmsNamedModel
from paradicms_etl.models.cms.cms_rights_mixin import CmsRightsMixin
from paradicms_etl.models.location import Location
from paradicms_etl.models.text import Text
from paradicms_etl.models.work import Work
from paradicms_etl.models.work_event import WorkEvent
from paradicms_etl.namespaces import CMS
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class CmsWork(CmsNamedModel, CmsImagesMixin, CmsRightsMixin, Work):
    class Builder(
        CmsNamedModel.Builder,
        CmsImagesMixin.Builder,
        CmsRightsMixin.Builder,
        Work.Builder,
    ):
        def add_alternative_title(self, alternative_title: str) -> "CmsWork.Builder":
            self.add(DCTERMS.alternative, alternative_title)
            return self

        def add_event(self, event: Union[URIRef, WorkEvent]) -> "CmsWork.Builder":
            self.add(CMS.event, event)
            return self

        def add_identifier(self, identifier: str) -> "CmsWork.Builder":
            self.add(DCTERMS.identifier, identifier)
            return self

        def add_page(self, page: Union[str, URIRef]) -> "CmsWork.Builder":
            self.add(FOAF.page, page)
            return self

        def add_provenance(self, provenance: str) -> "CmsWork.Builder":
            self.add(DCTERMS.provenance, provenance)
            return self

        def add_relation(self, relation: URIRef) -> "CmsWork.Builder":
            self.add(DCTERMS.relation, relation)
            return self

        def add_same_as(self, same_as: URIRef) -> "CmsWork.Builder":
            self.add(OWL.sameAs, same_as)
            return self

        def build(self) -> "CmsWork":
            return CmsWork(self._resource)

        def set_description(self, description: Union[str, Text]) -> "CmsWork.Builder":
            self.set(DCTERMS.description, description)
            return self

        def set_location(self, location: Union[str, Location]) -> "CmsWork.Builder":
            self.set(DCTERMS.spatial, location)
            return self

    def __init__(self, resource: Resource):
        CmsNamedModel.__init__(self, resource)
        self.title

    @classmethod
    def builder(cls, *, title: str, uri: URIRef) -> Builder:
        builder = cls.Builder(Graph().resource(uri))
        builder.set(DCTERMS.title, title)
        return builder

    @property
    def description(self) -> Union[str, Text, None]:
        return self._optional_value(DCTERMS.description, self._map_str_or_text_value)

    @property
    def event_uris(self) -> Tuple[URIRef, ...]:
        return tuple(self._values(CMS.event, self._map_uri_value))

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            CmsNamedModel.json_ld_context(),
            CmsImagesMixin.json_ld_context(),
            CmsRightsMixin.json_ld_context(),
            {
                "description": {"@id": str(DCTERMS.description)},
                "event": {"@id": str(CMS.event), "@type": "@id"},
                "page": {"@id": str(FOAF.page)},
                "relation": {"@id": str(DCTERMS.relation), "@type": "@id"},
                "sameAs": {"@id": str(OWL.sameAs), "@type": "@id"},
                "spatial": {"@id": str(DCTERMS.spatial), "@type": "@id"},
                "title": {"@id": str(DCTERMS.title)},
                "type": {"@id": str(DCTERMS.type), "@type": "@id"},
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
