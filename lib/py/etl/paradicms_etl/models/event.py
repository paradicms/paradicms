from rdflib import RDF, DCTERMS
from rdflib.resource import Resource

from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.namespaces import CMS


class Event(ResourceBackedNamedModel):
    LABEL_PROPERTY = DCTERMS.title

    def __init__(self, resource: Resource):
        resource.add(RDF.type, CMS.Event)
        ResourceBackedNamedModel.__init__(self, resource)
