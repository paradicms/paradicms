from rdflib import RDF
from rdflib.resource import Resource

from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.namespaces import CMS


class CmsNamedModel(ResourceBackedNamedModel):
    def __init__(self, resource: Resource):
        cms_class_uri = getattr(CMS, self.__class__.__name__.lstrip("Cms"), None)
        if cms_class_uri is not None:
            resource.add(RDF.type, cms_class_uri)
        ResourceBackedNamedModel.__init__(self, resource)
