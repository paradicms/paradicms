from importlib.resources import Resource

from rdflib import RDF

from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.namespaces import CMS


class Event(ResourceBackedNamedModel):
    def __init__(self, resource: Resource):
        resource.add(RDF.type, CMS.Event)
        ResourceBackedNamedModel.__init__(self, resource)
