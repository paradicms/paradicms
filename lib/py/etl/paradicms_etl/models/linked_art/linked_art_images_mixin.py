from typing import Optional, Tuple

from rdflib import URIRef, Literal
from rdflib.resource import Resource

from paradicms_etl.models.images_mixin import ImagesMixin
from paradicms_etl.models.linked_art.linked_art_model_mixin import LinkedArtModelMixin
from paradicms_etl.models.linked_art.linked_art_visual_item import LinkedArtVisualItem
from paradicms_etl.models.resource_backed_model import ResourceBackedModel
from paradicms_etl.namespaces import CRM


class LinkedArtImagesMixin(LinkedArtModelMixin, ImagesMixin):
    class Builder(ImagesMixin.Builder):
        def add_image(self, image: URIRef) -> "LinkedArtImagesMixin.Builder":
            raise NotImplementedError

    @property
    def image_uris(self) -> Tuple[URIRef, ...]:
        return tuple(visual_item.uri for visual_item in self.representations)

    @staticmethod
    def _map_term_to_linked_art_visual_item(
        term: Literal | Resource,
    ) -> Optional["LinkedArtVisualItem"]:  # type: ignore
        from paradicms_etl.models.linked_art.linked_art_visual_item import (
            LinkedArtVisualItem,
        )

        return ResourceBackedModel._map_term_to_model(LinkedArtVisualItem, term)

    @property
    def representations(self) -> Tuple[LinkedArtVisualItem, ...]:
        return tuple(
            self._values(
                CRM.P138i_has_representation,
                self._map_term_to_linked_art_visual_item,
            )
        )
