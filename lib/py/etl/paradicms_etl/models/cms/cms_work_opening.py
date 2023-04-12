from rdflib import URIRef

from paradicms_etl.models.cms.cms_work_event import CmsWorkEvent
from paradicms_etl.models.work_opening import WorkOpening


class CmsWorkOpening(CmsWorkEvent, WorkOpening):
    class Builder(CmsWorkEvent.Builder):
        def build(self) -> "CmsWorkOpening":
            return CmsWorkOpening(self._resource)

    @classmethod
    def builder(cls, *, uri: URIRef, work_uri: URIRef):
        return cls.Builder(uri=uri, work_uri=work_uri)
