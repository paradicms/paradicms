from abc import abstractmethod
from typing import Tuple

from rdflib import URIRef

from paradicms_etl.models.images_mixin import ImagesMixin
from paradicms_etl.models.linked_art.linked_art_model_mixin import LinkedArtModelMixin
from paradicms_etl.namespaces import CRM


class LinkedArtImagesMixin(LinkedArtModelMixin, ImagesMixin):
    class Builder(LinkedArtModelMixin.Builder, ImagesMixin.Builder):
        def add_image(self, image: URIRef) -> "LinkedArtImagesMixin.Builder":
            # Hijacking this to point to an arbitrary Image rather than the proper Linked Art DigitalObject form
            self.add(CRM.P138i_has_representation, image)
            return self

    # @property
    # def has_representation(self) -> Tuple["LinkedArtModel", ...]:  # type: ignore
    #     return tuple(
    #         self._values(
    #             CRM.P138i_has_representation, self._map_term_to_linked_art_model
    #         )
    #     )

    @property
    def image_uris(self) -> Tuple[URIRef, ...]:
        # Currently (20230722) using images from IIIF manifests rather than Linked Art
        raise NotImplementedError
        # image_uris: List[URIRef] = []
        # for representation in self.has_representation:
        #     if not isinstance(representation, LinkedArtVisualItem):
        #         continue
        #     digitally_shown_by = representation.digitally_shown_by
        #     if digitally_shown_by is not None:
        #         image_uris.append(digitally_shown_by.uri)
        #     else:
        #         # If the VisualItem has no digitally_shown_by, use the VisualItem's uri
        #         # The Getty Linked Art is like this
        #         image_uris.append(representation.uri)
        # return tuple(image_uris)

    @abstractmethod
    def replacer(self) -> Builder:
        raise NotImplementedError
