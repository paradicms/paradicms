from typing import Optional

from rdflib import DC, URIRef, Graph

from paradicms_etl.models.linked_art.linked_art_digital_object import (
    LinkedArtDigitalObject,
)
from paradicms_etl.models.linked_art.linked_art_model import LinkedArtModel
from paradicms_etl.namespaces import CRM, LA
from paradicms_etl.utils.uuid_urn import uuid_urn


class LinkedArtVisualItem(LinkedArtModel):
    class Builder(LinkedArtModel.Builder):
        def build(self) -> "LinkedArtVisualItem":
            return LinkedArtVisualItem(self._resource)

        def set_digitally_shown_by(
            self, digital_object: LinkedArtDigitalObject
        ) -> "LinkedArtVisualItem.Builder":
            self.set(LA.digitally_shown_by, digital_object)
            return self

    @classmethod
    def builder(cls):
        return cls.Builder(Graph().resource(uuid_urn()))

    @property
    def digitally_shown_by(self) -> Optional[LinkedArtDigitalObject]:
        model = self._optional_value(
            LA.digitally_shown_by, self._map_term_to_linked_art_model
        )
        return model if isinstance(model, LinkedArtDigitalObject) else None

    @property
    def format(self) -> Optional[str]:
        return self._optional_value(DC["format"], self._map_term_to_str)

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return CRM.E36_Visual_Item
