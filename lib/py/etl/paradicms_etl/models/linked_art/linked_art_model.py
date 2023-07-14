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
        self, *, p2_has_type: Optional[URIRef] = None
    ) -> Iterable[Resource]:
        for value in self._values(CRM.P67i_is_referred_to_by):
            if not isinstance(value, Resource):
                continue

            if p2_has_type is None:
                yield value
                continue

            for value_p2_has_type in value.objects(CRM.P2_has_type):
                if (
                    isinstance(value_p2_has_type, Resource)
                    and value_p2_has_type.identifier == p2_has_type
                ):
                    yield value
                    break
