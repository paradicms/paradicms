from abc import abstractmethod
from typing import Optional

from rdflib import URIRef

from paradicms_etl.models.images_mixin import ImagesMixin
from paradicms_etl.models.named_model import NamedModel


class Property(NamedModel, ImagesMixin):
    @property
    @abstractmethod
    def label(self) -> str:
        raise NotImplementedError

    @property
    @abstractmethod
    def range(self) -> Optional[URIRef]:
        raise NotImplementedError
