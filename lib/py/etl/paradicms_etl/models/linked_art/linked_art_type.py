from rdflib import URIRef, Graph

from paradicms_etl.models.linked_art.linked_art_model import LinkedArtModel
from paradicms_etl.namespaces import CRM


class LinkedArtType(LinkedArtModel):
    class Builder(LinkedArtModel.Builder):
        def build(self) -> "LinkedArtType":
            return LinkedArtType(self._resource)

        def set_label(self, label: str) -> "LinkedArtType.Builder":
            super().set_label(label)
            return self

    @classmethod
    def builder(cls, *, uri: URIRef) -> Builder:
        return cls.Builder(Graph().resource(uri))

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return CRM.E55_Type
