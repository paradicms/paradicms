from rdflib import RDF
from rdflib.resource import Resource

from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.namespaces import CMS


class CmsNamedModel(ResourceBackedNamedModel):
    def __init__(self, resource: Resource):
        if self.__class__.__name__.startswith("Cms"):
            interface_class_name = self.__class__.__name__[len("Cms") :]
            cms_class_uri = getattr(CMS, interface_class_name, None)
            if cms_class_uri is not None:
                resource.add(RDF.type, cms_class_uri)
            # else:
            #     logging.getLogger(__name__).warning(
            #         "no CMS class for: %s", interface_class_name
            #     )
        ResourceBackedNamedModel.__init__(self, resource)
