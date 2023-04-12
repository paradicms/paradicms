from abc import abstractmethod
from typing import Tuple, Union

from rdflib import URIRef

from paradicms_etl.models.named_model import NamedModel
from paradicms_etl.models.rights_mixin import RightsMixin
from paradicms_etl.models.text import Text


class Work(NamedModel, RightsMixin):
    """
    Model of a work such as a painting or a garment.

    This is the same concept as Work in VRA Core.
    """

    @property
    @abstractmethod
    def description(self) -> Union[str, Text, None]:
        raise NotImplementedError

    @property
    @abstractmethod
    def collection_uris(self) -> Tuple[URIRef, ...]:
        raise NotImplementedError

    @property
    @abstractmethod
    def label(self) -> str:
        raise NotImplementedError
