from abc import abstractmethod
from typing import Optional, Tuple

from rdflib import Literal
from rdflib.resource import Resource

from paradicms_etl.models.resource_backed_model_mixin import ResourceBackedModelMixin


class LinkedArtModelMixin(ResourceBackedModelMixin):
    @property
    @abstractmethod
    def is_referred_to_by(self) -> Tuple["LinkedArtModel", ...]:  # type: ignore
        raise NotImplementedError

    @staticmethod
    @abstractmethod
    def _map_term_to_linked_art_model(
        term: Literal | Resource,
    ) -> Optional["LinkedArtModel"]:  # type: ignore
        raise NotImplementedError
