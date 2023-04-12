from rdflib import URIRef

from paradicms_etl.models.cms.cms_work_event import CmsWorkEvent
from paradicms_etl.models.work_closing import WorkClosing


class CmsWorkClosing(CmsWorkEvent, WorkClosing):
    class Builder(CmsWorkEvent.Builder):
        def build(self) -> "CmsWorkClosing":
            return CmsWorkClosing(self._resource)

    @classmethod
    def builder(cls, *, uri: URIRef, work_uri: URIRef):
        return cls.Builder(uri=uri, work_uri=work_uri)
