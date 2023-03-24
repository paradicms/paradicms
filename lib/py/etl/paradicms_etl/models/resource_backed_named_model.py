from paradicms_etl.models.named_model import NamedModel
from paradicms_etl.models.resource_backed_model import ResourceBackedModel
from paradicms_etl.namespaces import CMS
from rdflib import URIRef, RDF


class ResourceBackedNamedModel(ResourceBackedModel, NamedModel):
    class Builder(ResourceBackedModel.Builder):
        def __init__(self, uri: URIRef):
            ResourceBackedModel.Builder.__init__(self, uri)

        def add(self, *args, **kwds) -> "Builder":
            ResourceBackedModel.Builder.add(self, *args, **kwds)
            return self

        def add_rights(self, rights: Optional[Rights]) -> "Builder":
            if rights is not None:
                temp_graph = Graph()
                rights_resource = rights.to_rdf(graph=temp_graph)
                for p, o in rights_resource.predicate_objects():
                    self.__resource.add(p.identifier, o)
            return self

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
