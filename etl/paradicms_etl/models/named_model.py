from abc import abstractmethod

from rdflib import URIRef

from paradicms_etl.model import Model


class NamedModel(Model):
    @property
    @abstractmethod
    def uri(self) -> URIRef:
        pass
