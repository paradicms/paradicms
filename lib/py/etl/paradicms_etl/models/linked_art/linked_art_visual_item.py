from typing import Optional

from rdflib import DC, URIRef

from paradicms_etl.models.linked_art.linked_art_model import LinkedArtModel
from paradicms_etl.namespaces import CRM


class LinkedArtVisualItem(LinkedArtModel):
    @property
    def format(self) -> Optional[str]:
        return self._optional_value(DC["format"], self._map_term_to_str)

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return CRM.E36_Visual_Item
