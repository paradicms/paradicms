from abc import abstractmethod
from typing import Optional

from rdflib import URIRef, RDFS

from paradicms_etl.models.named_model import NamedModel


class Property(NamedModel):
    @property
    @abstractmethod
    def label(self) -> str:
        return self._required_str_value(RDFS.label)

    @property
    @abstractmethod
    def range(self) -> Optional[URIRef]:
        pass
