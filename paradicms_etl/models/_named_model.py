from rdflib import URIRef

from paradicms_etl._model import _Model


class _NamedModel(_Model):
    def __init__(self, *, uri: URIRef):
        _Model.__init__(self, uri=uri)

    @property
    def uri(self) -> URIRef:
        return self.resource.identifier
