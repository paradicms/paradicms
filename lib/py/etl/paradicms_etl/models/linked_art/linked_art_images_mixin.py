from abc import abstractmethod
from typing import Tuple

from rdflib import URIRef

from paradicms_etl.models.images_mixin import ImagesMixin
from paradicms_etl.models.linked_art.linked_art_model_mixin import LinkedArtModelMixin
from paradicms_etl.models.linked_art.linked_art_visual_item import LinkedArtVisualItem
from paradicms_etl.namespaces import CRM


class LinkedArtImagesMixin(LinkedArtModelMixin, ImagesMixin):
    class Builder(LinkedArtModelMixin.Builder, ImagesMixin.Builder):
        def add_image(self, image: URIRef) -> "LinkedArtImagesMixin.Builder":
            self.add(CRM.P138i_has_representation, image)
            return self

    @property
    def has_representation(self) -> Tuple["LinkedArtModel", ...]:  # type: ignore
        return tuple(
            self._values(
                CRM.P138i_has_representation, self._map_term_to_linked_art_model
            )
        )

    @property
    def image_uris(self) -> Tuple[URIRef, ...]:
        return tuple(
            model.uri
            for model in self.has_representation
            if isinstance(model, LinkedArtVisualItem)
        )

    @abstractmethod
    def replacer(self) -> Builder:
        raise NotImplementedError
