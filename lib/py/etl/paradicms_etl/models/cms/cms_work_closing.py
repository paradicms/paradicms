from typing import Optional

from rdflib import URIRef, BNode, Graph

from paradicms_etl.models.cms.cms_work_event import CmsWorkEvent
from paradicms_etl.models.work_closing import WorkClosing


class CmsWorkClosing(CmsWorkEvent, WorkClosing):
    class Builder(CmsWorkEvent.Builder):
        def build(self) -> "CmsWorkClosing":
            return CmsWorkClosing(self._resource)

    @classmethod
    def builder(cls, *, uri: Optional[URIRef] = None):
        return cls.Builder(Graph().resource(uri if uri is not None else BNode()))
