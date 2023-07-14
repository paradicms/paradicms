from abc import abstractmethod
from typing import Optional, Iterable

from rdflib import URIRef
from rdflib.resource import Resource

from paradicms_etl.models.resource_backed_model_mixin import ResourceBackedModelMixin


class LinkedArtModelMixin(ResourceBackedModelMixin):
    @abstractmethod
    def _p67i_is_referred_to_by(
        self, *, p2_has_type: Optional[URIRef] = None
    ) -> Iterable[Resource]:
        pass
