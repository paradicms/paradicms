from rdflib import RDF, URIRef
from rdflib.resource import Resource

from paradicms_etl.models.event import Event
from paradicms_etl.namespaces import CMS


class WorkEvent(Event):
    def __init__(self, resource: Resource):
        resource.add(RDF.type, CMS.WorkEvent)
        Event.__init__(self, resource)
        self.work_uri

    @classmethod
    def json_ld_context(cls):
        context = Event.json_ld_context().copy()
        context.update({
            "work": {"@id": str(CMS.work), "@type": "@id"},
        })
        return context

    @property
    def work_uri(self) -> URIRef:
        return self._required_uri_value(CMS.work)
