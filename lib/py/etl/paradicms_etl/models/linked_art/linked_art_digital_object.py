from typing import Optional, Tuple

from rdflib import URIRef, Graph, DCTERMS

from paradicms_etl.models.linked_art.linked_art_model import LinkedArtModel
from paradicms_etl.models.linked_art.linked_art_type import LinkedArtType
from paradicms_etl.namespaces import LA, CRM
from paradicms_etl.namespaces.dig import DIG
from paradicms_etl.utils.uuid_urn import uuid_urn


class LinkedArtDigitalObject(LinkedArtModel):
    class Builder(LinkedArtModel.Builder):
        def build(self) -> "LinkedArtDigitalObject":
            return LinkedArtDigitalObject(self._resource)

        def set_access_point(
            self, access_point: URIRef
        ) -> "LinkedArtDigitalObject.Builder":
            self.set(LA.access_point, access_point)
            return self

        def set_has_type(
            self, has_type: LinkedArtType
        ) -> "LinkedArtDigitalObject.Builder":
            self.set(CRM.P2_has_type, has_type)
            return self

    @classmethod
    def builder(cls, *, uri: Optional[URIRef] = None) -> Builder:
        return cls.Builder(Graph().resource(uri if uri is not None else uuid_urn()))

    @property
    def access_point(self) -> Optional[URIRef]:
        return self._optional_value(LA.access_point, self._map_term_to_uri)

    @property
    def conforms_to(self) -> Tuple[URIRef, ...]:
        return tuple(self._values(DCTERMS.conformsTo, self._map_term_to_uri))

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return DIG.D1_Digital_Object
