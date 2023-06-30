from typing import Union, Tuple

from rdflib import URIRef, DCTERMS

from paradicms_etl.models.image import Image
from paradicms_etl.models.images_mixin import ImagesMixin
from paradicms_etl.models.resource_backed_model_mixin import ResourceBackedModelMixin


class DcImagesMixin(ResourceBackedModelMixin, ImagesMixin):
    class Builder(ResourceBackedModelMixin.Builder, ImagesMixin.Builder):
        def add_image(self, image: Union[Image, URIRef]) -> "DcImagesMixin.Builder":
            # (image, dcterms:source, this) in this graph.
            # Dublin Core doesn't have an inverse of dcterms:source.
            if isinstance(image, Image):
                image_uri = image.uri
            else:
                image_uri = image
            self._resource.graph.add(
                (image_uri, DCTERMS.source, self._resource.identifier)
            )
            return self

    @property
    def image_uris(self) -> Tuple[URIRef, ...]:
        return tuple(
            subject
            for subject in self._resource.graph.subjects(
                object=self._resource.identifier, predicate=DCTERMS.source
            )
            if isinstance(subject, URIRef)
        )
