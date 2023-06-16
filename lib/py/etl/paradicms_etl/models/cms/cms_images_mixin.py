from typing import Tuple

from rdflib import URIRef, FOAF

from paradicms_etl.models.images_mixin import ImagesMixin
from paradicms_etl.models.resource_backed_model_mixin import ResourceBackedModelMixin


class CmsImagesMixin(ResourceBackedModelMixin, ImagesMixin):
    class Builder(ResourceBackedModelMixin.Builder):
        def add_image_uri(self, image_uri: URIRef) -> "CmsImagesMixin.Builder":
            self.add(FOAF.depiction, image_uri)
            return self

    def image_uris(self) -> Tuple[URIRef, ...]:
        return tuple(self._values(FOAF.depiction, self._map_uri_value))
