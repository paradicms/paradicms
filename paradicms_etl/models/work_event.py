from rdflib import RDF

from paradicms_etl.models.event import Event
from paradicms_etl.namespaces import CMS


class WorkEvent(Event):
    def __init__(self, *args, **kwds):
        Event.__init__(self, *args, **kwds)
        self._resource.add(RDF.type, CMS.WorkEvent)
