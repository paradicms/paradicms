from abc import abstractmethod
from typing import Optional, Iterable

from rdflib import URIRef

from paradicms_etl.models.resource_backed_model_mixin import ResourceBackedModelMixin


class LinkedArtModelMixin(ResourceBackedModelMixin):
    @abstractmethod
    def p67i_is_referred_to_by(
        self, *, p2_has_type: Optional[URIRef] = None
    ) -> Iterable["LinkedArtModel"]:
        pass
