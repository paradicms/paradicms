from rdflib import URIRef

from paradicms_etl.models.date_time_union import DateTimeUnion
from paradicms_etl.models.linked_art.linked_art_is_identified_by_mixin import (
    LinkedArtIsIdentifiedByMixin,
)
from paradicms_etl.models.linked_art.linked_art_model import LinkedArtModel
from paradicms_etl.namespaces.crm import CRM


class LinkedArtTimeSpan(LinkedArtModel, LinkedArtIsIdentifiedByMixin):
    class Builder(LinkedArtModel.Builder):
        pass

    @property
    def begin_of_the_begin(self) -> DateTimeUnion | None:
        return self._optional_value(  # type: ignore
            CRM.P82a_begin_of_the_begin, self._map_term_to_date_time_union
        )

    @property
    def end_of_the_end(self) -> DateTimeUnion | None:
        return self._optional_value(  # type: ignore
            CRM.P82b_end_of_the_end, self._map_term_to_date_time_union
        )

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return CRM["E52_Time-Span"]
