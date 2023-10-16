from __future__ import annotations

from rdflib import FOAF, URIRef

from paradicms_etl.models.images_mixin import ImagesMixin
from paradicms_etl.models.resource_backed_model_mixin import ResourceBackedModelMixin


class FoafImagesMixin(ResourceBackedModelMixin, ImagesMixin):
    class Builder(ResourceBackedModelMixin.Builder, ImagesMixin.Builder):
        def add_image(self, image: URIRef) -> FoafImagesMixin.Builder:
            self.add(FOAF.depiction, image)
            return self

    @property
    def image_uris(self) -> tuple[URIRef, ...]:
        return tuple(self._values(FOAF.depiction, self._map_term_to_uri))

    @classmethod
    def json_ld_context(cls):
        return {
            "depiction": {"@id": str(FOAF.depiction), "@type": "@id"},
            "image": {"@id": str(FOAF.depiction), "@type": "@id"},
        }
