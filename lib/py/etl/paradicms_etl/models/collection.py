from abc import abstractmethod
from typing import Tuple

from rdflib import URIRef

from paradicms_etl.models.images_mixin import ImagesMixin
from paradicms_etl.models.named_model import NamedModel


class Collection(NamedModel, ImagesMixin):
    @property
    @abstractmethod
    def label(self) -> str:
        raise NotImplementedError

    @property
    @abstractmethod
    def work_uris(self) -> Tuple[URIRef, ...]:
        raise NotImplementedError
