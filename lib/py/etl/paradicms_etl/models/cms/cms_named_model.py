from rdflib import RDF

from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.namespaces import CMS


class CmsNamedModel(ResourceBackedNamedModel):
    def __init__(self, *args, **kwds):
        ResourceBackedNamedModel.__init__(self, *args, **kwds)
        cms_class_uri = getattr(CMS, self.__class__.__name__, None)
        if cms_class_uri is not None:
            self._resource.add(RDF.type, cms_class_uri)
