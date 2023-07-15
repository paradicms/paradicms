from rdflib import URIRef

from paradicms_etl.models.linked_art.linked_art_model import LinkedArtModel
from paradicms_etl.namespaces import CRM


class LinkedArtRight(LinkedArtModel):
    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return CRM.E30_Right
