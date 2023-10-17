from rdflib import URIRef

from paradicms_etl.models.linked_art.linked_art_linguistic_object import (
    LinkedArtLinguisticObject,
)
from paradicms_etl.models.linked_art.linked_art_model_mixin import LinkedArtModelMixin


class LinkedArtDescriptionMixin(LinkedArtModelMixin):
    __DESCRIPTION_TYPE = URIRef("http://vocab.getty.edu/aat/300080091")

    @property
    def description(self) -> LinkedArtLinguisticObject | None:
        for model in self.is_referred_to_by:
            if (
                isinstance(model, LinkedArtLinguisticObject)
                and self.__DESCRIPTION_TYPE in model.has_type
            ):
                return model
        return None
