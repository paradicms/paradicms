from typing import Optional, TypeVar, Iterable

from rdflib import RDFS, URIRef
from rdflib.resource import Resource

from paradicms_etl.models.resource_backed_model import (
    ResourceBackedModel,
    _StatementObject,
)

_LinkedArtModelT = TypeVar("_LinkedArtModelT")


class LinkedArtModel(ResourceBackedModel):
    @classmethod
    def label_property_uri(cls) -> URIRef:
        return RDFS.label

    @staticmethod
    def _map_linked_art_linguistic_object_value(
        value: _StatementObject,
    ) -> Optional["LinkedArtLinguisticObject"]:  # type: ignore
        from paradicms_etl.models.linked_art.linked_art_linguistic_object import (
            LinkedArtLinguisticObject,
        )

        return ResourceBackedModel._map_model_value(LinkedArtLinguisticObject, value)

    @staticmethod
    def _map_linked_art_right_value(
        value: _StatementObject,
    ) -> Optional["LinkedArtRight"]:  # type: ignore
        from paradicms_etl.models.linked_art.linked_art_right import LinkedArtRight

        return ResourceBackedModel._map_model_value(LinkedArtRight, value)

    def _p67i_is_referred_to_by(
        self, p2_has_type: Optional[URIRef] = None
    ) -> Iterable[URIRef]:
        for value in self._values("P67i_is_referred_to_by"):
            if not isinstance(value, Resource):
                continue

        return CRM()
