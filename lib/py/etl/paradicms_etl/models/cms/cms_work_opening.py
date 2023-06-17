from typing import Optional

from rdflib import URIRef, Graph, BNode

from paradicms_etl.models.cms.cms_work_event import CmsWorkEvent
from paradicms_etl.models.work_opening import WorkOpening


class CmsWorkOpening(CmsWorkEvent, WorkOpening):
    class Builder(CmsWorkEvent.Builder):
        def build(self) -> "CmsWorkOpening":
            return CmsWorkOpening(self._resource)

    @classmethod
    def builder(cls, *, uri: Optional[URIRef] = None):
        return cls.Builder(Graph().resource(uri if uri is not None else BNode()))
