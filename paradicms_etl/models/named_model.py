from rdflib import URIRef

from paradicms_etl.model import Model


class NamedModel(Model):
    def __init__(self, *args, **kwds):
        Model.__init__(self, *args, **kwds)
        if not isinstance(self.uri, URIRef):
            raise TypeError(type(self.uri))

    @property
    def uri(self) -> URIRef:
        return self._resource.identifier
