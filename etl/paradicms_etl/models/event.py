from rdflib import RDF

from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.namespaces import CMS


class Event(ResourceBackedNamedModel):
    def __init__(self, *args, **kwds):
        ResourceBackedNamedModel.__init__(self, *args, **kwds)
        self._resource.add(RDF.type, CMS.Event)
