from rdflib import URIRef, RDF

from paradicms_etl.models.named_model import NamedModel
from paradicms_etl.models.resource_backed_model import ResourceBackedModel
from paradicms_etl.namespaces import CMS


class ResourceBackedNamedModel(ResourceBackedModel, NamedModel):
    def __init__(self, *args, **kwds):
        ResourceBackedModel.__init__(self, *args, **kwds)
        cms_class_uri = getattr(CMS, self.__class__.__name__, None)
        if cms_class_uri is not None:
            self._resource.add(RDF.type, cms_class_uri)
        if not isinstance(self.uri, URIRef):
            raise TypeError(type(self.uri))

    @property
    def uri(self) -> URIRef:
        return self._resource.identifier