from typing import Optional

from rdflib import URIRef

from paradicms_etl.models.linked_art.linked_art_linguistic_object import (
    LinkedArtLinguisticObject,
)
from paradicms_etl.models.linked_art.linked_art_model_mixin import LinkedArtModelMixin


class LinkedArtDescriptionMixin(LinkedArtModelMixin):
    @property
    def description(self) -> Optional[LinkedArtLinguisticObject]:
        description_type = URIRef("http://vocab.getty.edu/aat/300080091")
        for model in self.is_referred_to_by:
            if (
                isinstance(model, LinkedArtLinguisticObject)
                and description_type in model.has_type
            ):
                return model
        return None
