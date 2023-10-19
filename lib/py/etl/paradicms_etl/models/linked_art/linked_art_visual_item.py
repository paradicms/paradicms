from rdflib import Graph, URIRef
from rdflib.resource import Resource

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
            self, digital_object: LinkedArtDigitalObject | URIRef
        ) -> "LinkedArtVisualItem.Builder":
            self.set(LA.digitally_shown_by, digital_object)
            return self

    @classmethod
    def builder(cls) -> Builder:
        return cls.Builder(Graph().resource(uuid_urn()))

    @property
    def digitally_shown_by(self) -> LinkedArtDigitalObject | None:
        model = self._optional_value(
            LA.digitally_shown_by, self._map_term_to_linked_art_model
        )
        return model if isinstance(model, LinkedArtDigitalObject) else None

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return CRM.E36_Visual_Item

    def to_rdf(self, graph: Graph) -> Resource:
        # Don't try to curate the RDF
        return super().to_rdf(graph)
