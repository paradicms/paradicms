from rdflib import RDF, URIRef
from rdflib.resource import Resource

from paradicms_etl.models.event import Event
from paradicms_etl.namespaces import CMS
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class WorkEvent(Event):
    def __init__(self, resource: Resource):
        resource.add(RDF.type, CMS.WorkEvent)
        Event.__init__(self, resource)
        self.work_uri

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            Event.json_ld_context(),
            {
                "work": {"@id": str(CMS.work), "@type": "@id"},
            },
        )

    @property
    def work_uri(self) -> URIRef:
        return self._required_uri_value(CMS.work)
