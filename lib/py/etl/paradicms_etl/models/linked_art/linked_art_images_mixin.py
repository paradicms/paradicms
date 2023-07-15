from typing import Tuple, List

from rdflib import URIRef

from paradicms_etl.models.images_mixin import ImagesMixin
from paradicms_etl.models.linked_art.linked_art_model_mixin import LinkedArtModelMixin
from paradicms_etl.models.linked_art.linked_art_visual_item import LinkedArtVisualItem
from paradicms_etl.namespaces import CRM


class LinkedArtImagesMixin(LinkedArtModelMixin, ImagesMixin):
    class Builder(ImagesMixin.Builder):
        def add_image(self, image: URIRef) -> "LinkedArtImagesMixin.Builder":
            raise NotImplementedError

    @property
    def image_uris(self) -> Tuple[URIRef, ...]:
        return tuple(visual_item.uri for visual_item in self.p138i_has_representation)

    @property
    def p138i_has_representation(self) -> Tuple[LinkedArtVisualItem, ...]:
        from paradicms_etl.models.linked_art.linked_art_model import LinkedArtModel

        model: LinkedArtModel
        representations: List[LinkedArtVisualItem] = []
        for model in self._values(
            CRM.P138i_has_representation, self._map_term_to_linked_art_model
        ):
            if isinstance(model, LinkedArtVisualItem):
                representations.append(model)
        return tuple(representations)
