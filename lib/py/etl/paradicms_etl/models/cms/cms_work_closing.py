from typing import Optional

from rdflib import URIRef, BNode, Graph

from paradicms_etl.models.cms.cms_work_event import CmsWorkEvent
from paradicms_etl.models.work_closing import WorkClosing
from paradicms_etl.namespaces import CMS


class CmsWorkClosing(CmsWorkEvent, WorkClosing):
    class Builder(CmsWorkEvent.Builder):
        def build(self) -> "CmsWorkClosing":
            return CmsWorkClosing(self._resource)

    @classmethod
    def builder(cls, *, work_uri: URIRef, uri: Optional[URIRef] = None):
        builder = cls.Builder(Graph().resource(uri if uri is not None else BNode()))
        builder.set(CMS.work, work_uri)
        return builder
