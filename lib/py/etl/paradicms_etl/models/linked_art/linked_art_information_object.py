from rdflib import URIRef

from paradicms_etl.models.linked_art.linked_art_model import LinkedArtModel
from paradicms_etl.namespaces import CRM


class LinkedArtInformationObject(LinkedArtModel):
    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return CRM.E73_Information_Object
