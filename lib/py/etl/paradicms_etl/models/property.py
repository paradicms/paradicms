from abc import abstractmethod
from typing import Optional

from rdflib import URIRef

from paradicms_etl.models.named_model import NamedModel


class Property(NamedModel):
    @property
    @abstractmethod
    def label(self) -> str:
        pass

    @property
    @abstractmethod
    def range(self) -> Optional[URIRef]:
        pass
