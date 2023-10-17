from rdflib import URIRef

from paradicms_etl.models.linked_art.linked_art_has_symbolic_content_mixin import (
    LinkedArtHasSymbolicContentMixin,
)
from paradicms_etl.models.linked_art.linked_art_model import LinkedArtModel
from paradicms_etl.namespaces.crm import CRM


class LinkedArtLinguisticAppellation(LinkedArtModel, LinkedArtHasSymbolicContentMixin):
    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return CRM.E33_E41_Linguistic_Appellation
