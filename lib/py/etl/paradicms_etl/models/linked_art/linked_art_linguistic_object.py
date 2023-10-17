from collections.abc import Iterable

from more_itertools import flatten
from rdflib import URIRef

from paradicms_etl.models.linked_art.linked_art_digital_object import (
    LinkedArtDigitalObject,
)
from paradicms_etl.models.linked_art.linked_art_has_symbolic_content_mixin import (
    LinkedArtHasSymbolicContentMixin,
)
from paradicms_etl.models.linked_art.linked_art_model import LinkedArtModel
from paradicms_etl.models.linked_art.linked_art_right import LinkedArtRight
from paradicms_etl.models.text import Text
from paradicms_etl.namespaces import CRM, LA


class LinkedArtLinguisticObject(LinkedArtModel, LinkedArtHasSymbolicContentMixin, Text):
    class Builder(LinkedArtModel.Builder):
        pass

    @property
    def contributors(self) -> tuple[str | URIRef, ...]:
        return ()

    @property
    def creators(self) -> tuple[str | URIRef, ...]:
        return ()

    @property
    def digitally_carried_by(self) -> LinkedArtDigitalObject | None:
        model = self._optional_value(
            LA.digitally_carried_by, self._map_term_to_linked_art_model
        )
        return model if isinstance(model, LinkedArtDigitalObject) else None

    @property
    def licenses(self) -> tuple[str | URIRef, ...]:
        return tuple(flatten(right.has_type for right in self.__is_subject_to))

    @property
    def rights_holders(self) -> tuple[str | URIRef, ...]:
        return tuple(
            acknowledgement.value
            for right in self.__is_subject_to
            for acknowledgement in right.is_subject_of
            if isinstance(acknowledgement, LinkedArtLinguisticObject)
        )

    @property
    def rights_statements(self) -> tuple[str | URIRef, ...]:
        return ()

    @property
    def __is_subject_to(self) -> Iterable[LinkedArtRight]:
        yield from (
            model
            for model in self._values(
                CRM.P104_is_subject_to, self._map_term_to_linked_art_model
            )
            if isinstance(model, LinkedArtRight)
        )

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return CRM.E33_Linguistic_Object

    @property
    def value(self) -> str:
        return self.has_symbolic_content[0].value
