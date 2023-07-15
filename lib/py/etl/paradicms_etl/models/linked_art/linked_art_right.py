from typing import Tuple

from rdflib import URIRef

from paradicms_etl.models.linked_art.linked_art_model import LinkedArtModel
from paradicms_etl.namespaces import CRM


class LinkedArtRight(LinkedArtModel):
    @property
    def p129i_is_subject_of(self) -> Tuple[LinkedArtModel, ...]:  # type: ignore
        """
        The E30 right is the P129 subject of acknowledgments.
        """

        return tuple(
            self._values(
                CRM.P129i_is_subject_of,
                LinkedArtModel._map_term_to_linked_art_model,
            )
        )

    @property
    def p2_has_type(self) -> URIRef:
        """
        P2_has_type returns e.g., the creativecommons.org license URI
        """

        return self._required_value(CRM.P2_has_type, self._map_term_to_uri)

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return CRM.E30_Right
