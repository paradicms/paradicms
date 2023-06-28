from typing import Union, Tuple, Optional

from rdflib import URIRef, SDO

from paradicms_etl.models.image import Image
from paradicms_etl.models.images_mixin import ImagesMixin
from paradicms_etl.models.resource_backed_model_mixin import ResourceBackedModelMixin
from paradicms_etl.models.text import Text


class SchemaThingMixin(ResourceBackedModelMixin, ImagesMixin):
    """
    Mixin that supplies schema:Thing properties to other models.

    This is not part of SchemaModel because SchemaNamedModel does not inherit SchemaModel.
    SchemaModel inherits ResourceBackedModel and SchemaNamedModel inherits ResourceBackedNamedModel.
    This mixin supplies schema:Thing properties to both SchemaModel and SchemaNamedModel and all of their descendants.
    """

    class Builder(ResourceBackedModelMixin.Builder, ImagesMixin.Builder):
        def add_alternate_name(
            self, alternate_name: Union[str, Text]
        ) -> "SchemaThingMixin.Builder":
            self.add(SDO.alternateName, alternate_name)
            return self

        def add_image(self, image: Union[Image, URIRef]) -> "SchemaThingMixin.Builder":
            self.add(SDO.image, image)
            return self

        def add_same_as(self, same_as: URIRef) -> "SchemaThingMixin.Builder":
            self.add(SDO.sameAs, same_as)
            return self

        def add_url(self, url: URIRef) -> "SchemaThingMixin.Builder":
            self.set(SDO.url, url)
            return self

        def set_label(self, label: str) -> "SchemaThingMixin.Builder":
            return self.set_name(label)

        def set_description(
            self, description: Union[str, Text]
        ) -> "SchemaThingMixin.Builder":
            self.set(SDO.description, description)
            return self

        def set_name(self, name: str) -> "SchemaThingMixin.Builder":
            self.set(SDO.name, name)
            return self

    @property
    def description(self) -> Union[str, Text, None]:
        return self._optional_value(SDO.description, self._map_str_or_text_value)  # type: ignore

    @classmethod
    def json_ld_context(cls):
        return {
            # Override some Thing properties to enforce types
            "image": {"@id": str(SDO.image), "@type": "@id"},
            "sameAs": {"@id": str(SDO.sameAs), "@type": "@id"},
            "url": {"@id": str(SDO.url), "@type": "@id"},
            "@vocab": str(SDO),
        }

    @property
    def image_uris(self) -> Tuple[URIRef, ...]:
        return tuple(self._values(SDO.image, self._map_uri_value))

    @property
    def label(self) -> Optional[str]:
        return self.name

    @property
    def name(self) -> Optional[str]:
        return self._optional_value(SDO.name, self._map_str_value)

    @property
    def _required_name(self) -> str:
        return self._required_value(SDO.name, self._map_str_value)

    @property
    def url(self) -> Optional[URIRef]:
        return self._optional_value(SDO.url, self._map_uri_value)
