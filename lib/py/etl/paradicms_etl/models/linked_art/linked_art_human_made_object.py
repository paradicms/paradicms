from __future__ import annotations

from typing import TYPE_CHECKING

from paradicms_etl.models.linked_art.linked_art_description_mixin import (
    LinkedArtDescriptionMixin,
)
from paradicms_etl.models.linked_art.linked_art_images_mixin import LinkedArtImagesMixin
from paradicms_etl.models.linked_art.linked_art_model import LinkedArtModel
from paradicms_etl.models.linked_art.linked_art_production import LinkedArtProduction
from paradicms_etl.models.work import Work
from paradicms_etl.namespaces import CRM

if TYPE_CHECKING:
    from rdflib import URIRef

    from paradicms_etl.models.date_time_union import DateTimeUnion


class LinkedArtHumanMadeObject(
    LinkedArtModel, LinkedArtDescriptionMixin, LinkedArtImagesMixin, Work
):
    class Builder(
        LinkedArtModel.Builder,
        LinkedArtImagesMixin.Builder,
        LinkedArtDescriptionMixin.Builder,
        Work.Builder,
    ):
        def build(self) -> LinkedArtHumanMadeObject:
            return LinkedArtHumanMadeObject(self._resource)

    @property
    def contributors(self) -> tuple[str | URIRef, ...]:
        return ()

    @property
    def creators(self) -> tuple[str | URIRef, ...]:
        was_produced_by = self.was_produced_by
        return (
            tuple(person.uri for person in was_produced_by.carried_out_by)
            if was_produced_by is not None
            else ()
        )

    @property
    def created(self) -> DateTimeUnion | None:
        was_produced_by = self.was_produced_by
        if was_produced_by is None:
            return None
        time_span = was_produced_by.has_time_span
        if time_span is None:
            return None
        return time_span.begin_of_the_begin

    @property
    def label(self) -> str:
        return self._required_label

    @property
    def modified(self) -> DateTimeUnion | None:
        return None

    def replacer(self) -> Builder:
        return self.Builder(self.resource)

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return CRM["E22_Human-Made_Object"]

    @property
    def spatial(self) -> None:
        return None

    @property
    def subjects(self) -> tuple[str | URIRef, ...]:
        # Don't have a good example of this currently (20230823): https://linked.art/model/object/aboutness/#subject
        return ()

    @property
    def was_produced_by(self) -> LinkedArtProduction | None:
        production = self._optional_value(
            CRM.P108i_was_produced_by, self._map_term_to_linked_art_model
        )
        return production if isinstance(production, LinkedArtProduction) else None
