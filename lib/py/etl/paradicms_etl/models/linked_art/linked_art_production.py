from rdflib import URIRef

from paradicms_etl.models.event import Event
from paradicms_etl.models.linked_art.linked_art_model import LinkedArtModel
from paradicms_etl.models.linked_art.linked_art_person import LinkedArtPerson
from paradicms_etl.models.linked_art.linked_art_time_span import LinkedArtTimeSpan
from paradicms_etl.namespaces.crm import CRM


class LinkedArtProduction(LinkedArtModel, Event):
    @property
    def carried_out_by(self) -> tuple[LinkedArtPerson, ...]:
        return tuple(
            value
            for value in self._values(
                CRM.P14_carried_out_by, self._map_term_to_linked_art_model
            )
            if isinstance(value, LinkedArtPerson)
        )

    @property
    def has_time_span(self) -> LinkedArtTimeSpan | None:
        time_span = self._optional_value(
            CRM["P4_has_time-span"], self._map_term_to_linked_art_model
        )
        return time_span if isinstance(time_span, LinkedArtTimeSpan) else None

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return CRM.E12_Production
