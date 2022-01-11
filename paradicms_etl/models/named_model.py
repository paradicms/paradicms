from paradicms_etl.model import Model
from rdflib import URIRef


class NamedModel(Model):
    @property
    def uri(self) -> URIRef:
        return self._resource.identifier
