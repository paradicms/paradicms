from abc import abstractmethod
from typing import Optional, Iterable

from rdflib import URIRef, Literal
from rdflib.resource import Resource

from paradicms_etl.models.resource_backed_model_mixin import ResourceBackedModelMixin


class LinkedArtModelMixin(ResourceBackedModelMixin):
    @abstractmethod
    @staticmethod
    def _map_term_to_linked_art_model(
        term: Literal | Resource,
    ) -> Optional["LinkedArtModel"]:  # type: ignore
        raise NotImplementedError

    @abstractmethod
    def p67i_is_referred_to_by(
        self, *, p2_has_type: Optional[URIRef] = None
    ) -> Iterable["LinkedArtModel"]:  # type: ignore
        raise NotImplementedError
