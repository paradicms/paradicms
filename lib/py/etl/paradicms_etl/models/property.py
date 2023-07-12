from abc import abstractmethod
from typing import Optional

from rdflib import URIRef

from paradicms_etl.model import Model
from paradicms_etl.models.images_mixin import ImagesMixin


class Property(Model, ImagesMixin):
    @property
    @abstractmethod
    def label(self) -> str:
        raise NotImplementedError

    @property
    @abstractmethod
    def range(self) -> Optional[URIRef]:
        raise NotImplementedError
