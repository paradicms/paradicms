from typing import Optional, TypeVar, Iterable

from rdflib import RDFS, URIRef
from rdflib.resource import Resource

from paradicms_etl.models.resource_backed_model import (
    ResourceBackedModel,
    _StatementObject,
)
from paradicms_etl.namespaces import CRM

_LinkedArtModelT = TypeVar("_LinkedArtModelT")


class LinkedArtModel(ResourceBackedModel):
    @classmethod
    def label_property_uri(cls) -> URIRef:
        return RDFS.label

    @staticmethod
    def _map_term_to_linked_art_linguistic_object(
        term: _StatementObject,
    ) -> Optional["LinkedArtLinguisticObject"]:  # type: ignore
        from paradicms_etl.models.linked_art.linked_art_linguistic_object import (
            LinkedArtLinguisticObject,
        )

        return ResourceBackedModel._map_term_to_model(LinkedArtLinguisticObject, term)

    @staticmethod
    def _map_term_to_linked_art_right(
        term: _StatementObject,
    ) -> Optional["LinkedArtRight"]:  # type: ignore
        from paradicms_etl.models.linked_art.linked_art_right import LinkedArtRight

        return ResourceBackedModel._map_term_to_model(LinkedArtRight, term)

    @staticmethod
    def _map_term_to_linked_art_visual_item(
        term: _StatementObject,
    ) -> Optional["LinkedArtRight"]:  # type: ignore
        from paradicms_etl.models.linked_art.linked_art_visual_item import (
            LinkedArtVisualItem,
        )

        return ResourceBackedModel._map_term_to_model(LinkedArtVisualItem, term)

    def _p67i_is_referred_to_by(
        self, *, p2_has_type: Optional[URIRef] = None
    ) -> Iterable[Resource]:
        for term in self._values(CRM.P67i_is_referred_to_by):
            if not isinstance(term, Resource):
                continue

            if p2_has_type is None:
                yield term
                continue

            for value_p2_has_type in term.objects(CRM.P2_has_type):
                if (
                    isinstance(value_p2_has_type, Resource)
                    and value_p2_has_type.identifier == p2_has_type
                ):
                    yield term
                    break
