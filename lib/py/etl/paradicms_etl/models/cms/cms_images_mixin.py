from typing import Tuple, Union

from rdflib import URIRef, FOAF

from paradicms_etl.models.image import Image
from paradicms_etl.models.images_mixin import ImagesMixin
from paradicms_etl.models.resource_backed_model_mixin import ResourceBackedModelMixin


class CmsImagesMixin(ResourceBackedModelMixin, ImagesMixin):
    class Builder(ResourceBackedModelMixin.Builder):
        def add_image(self, image: Union[Image, URIRef]) -> "CmsImagesMixin.Builder":
            self.add(FOAF.depiction, image)
            return self

    @classmethod
    def json_ld_context(cls):
        return {"image": {"@id": str(FOAF.depiction), "@type": "@id"}}

    @property
    def image_uris(self) -> Tuple[URIRef, ...]:
        return tuple(self._values(FOAF.depiction, self._map_uri_value))
