from rdflib import URIRef

from paradicms_etl.models.named_model import NamedModel
from paradicms_etl.models.resource_backed_model import ResourceBackedModel


class ResourceBackedNamedModel(ResourceBackedModel, NamedModel):
    class Builder(ResourceBackedModel.Builder):
        def __init__(self, uri: URIRef):
            ResourceBackedModel.Builder.__init__(self, uri)

        def add(self, *args, **kwds) -> "ResourceBackedNamedModel.Builder":
            ResourceBackedModel.Builder.add(self, *args, **kwds)
            return self

    def __init__(self, *args, **kwds):
        ResourceBackedModel.__init__(self, *args, **kwds)
        if not isinstance(self.uri, URIRef):
            raise TypeError(type(self.uri))

    @property
    def uri(self) -> URIRef:
        return self._resource.identifier
