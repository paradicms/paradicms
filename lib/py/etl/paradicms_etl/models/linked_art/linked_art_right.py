from rdflib import URIRef

from paradicms_etl.models.linked_art.linked_art_model import LinkedArtModel
from paradicms_etl.namespaces import CRM


class LinkedArtRight(LinkedArtModel):
    @property
    def p2_has_type(self) -> URIRef:
        """
        P2_has_type returns e.g., the creativecommons.org license URI
        """

        return self._required_value(CRM.P2_has_type, self._map_term_to_uri)

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return CRM.E30_Right
