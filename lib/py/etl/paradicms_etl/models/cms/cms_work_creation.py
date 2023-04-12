from typing import Tuple

from rdflib import URIRef, DCTERMS
from rdflib.resource import Resource

from paradicms_etl.models.cms.cms_work_event import CmsWorkEvent
from paradicms_etl.models.work_creation import WorkCreation
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class CmsWorkCreation(CmsWorkEvent, WorkCreation):
    class Builder(CmsWorkEvent.Builder):
        def add_contributor_uri(self, contributor: URIRef) -> "CmsWorkCreation.Builder":
            self.add(DCTERMS.contributor, contributor)
            return self

        def add_creator_uri(self, creator: URIRef) -> "CmsWorkCreation.Builder":
            self.add(DCTERMS.creator, creator)
            return self

        def build(self) -> "CmsWorkCreation":
            return CmsWorkCreation(self._resource)

    @classmethod
    def builder(cls, *, uri: URIRef, work_uri: URIRef):
        return cls.Builder(uri=uri, work_uri=work_uri)

    def __init__(self, resource: Resource):
        CmsWorkEvent.__init__(self, resource)
        self.creator_uris

    @property
    def creator_uris(self) -> Tuple[URIRef, ...]:
        return tuple(self._uri_values(DCTERMS.creator))

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            CmsWorkEvent.json_ld_context(),
            {
                "contributor": {"@id": str(DCTERMS.contributor), "@type": "@id"},
                "creator": {"@id": str(DCTERMS.creator), "@type": "@id"},
            },
        )
