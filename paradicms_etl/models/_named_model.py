from rdflib import URIRef

from paradicms_etl._model import _Model


class _NamedModel(_Model):
    @property
    def uri(self) -> URIRef:
        return self._resource.identifier
