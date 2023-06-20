from rdflib import RDF
from rdflib.resource import Resource

from paradicms_etl.models.cms.cms_event import CmsEvent
from paradicms_etl.models.work_event import WorkEvent
from paradicms_etl.namespaces import CMS


class CmsWorkEvent(CmsEvent, WorkEvent):
    def __init__(self, resource: Resource):
        resource.add(RDF.type, CMS.WorkEvent)
        CmsEvent.__init__(self, resource)
