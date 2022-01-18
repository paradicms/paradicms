from rdflib import RDF

from paradicms_etl.models.named_model import NamedModel
from paradicms_etl.namespaces import CMS


class Event(NamedModel):
    def __init__(self, *args, **kwds):
        NamedModel.__init__(self, *args, **kwds)
        self._resource.add(RDF.type, CMS.Event)
