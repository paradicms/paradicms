from __future__ import annotations

from abc import abstractmethod
from typing import TYPE_CHECKING

from paradicms_etl.models.resource_backed_model_mixin import ResourceBackedModelMixin

if TYPE_CHECKING:
    from linked_art_model import LinkedArtModel
    from rdflib import Literal
    from rdflib.resource import Resource


class LinkedArtModelMixin(ResourceBackedModelMixin):
    @property
    @abstractmethod
    def is_referred_to_by(self) -> tuple[LinkedArtModel, ...]:  # type: ignore
        raise NotImplementedError

    @staticmethod
    @abstractmethod
    def _map_term_to_linked_art_model(
        term: Literal | Resource,
    ) -> LinkedArtModel | None:  # type: ignore
        raise NotImplementedError
