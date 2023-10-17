from __future__ import annotations

from typing import TYPE_CHECKING

from rdflib import SDO, URIRef

from paradicms_etl.models.images_mixin import ImagesMixin
from paradicms_etl.models.resource_backed_model_mixin import ResourceBackedModelMixin
from paradicms_etl.models.text import Text

if TYPE_CHECKING:
    from paradicms_etl.model import Model


class SchemaThingMixin(ResourceBackedModelMixin, ImagesMixin):
    """
    Mixin that supplies schema:Thing properties to other models.

    This is not part of SchemaModel because SchemaModel does not inherit SchemaModel.
    SchemaModel inherits ResourceBackedModel and SchemaModel inherits ResourceBackedModel.
    This mixin supplies schema:Thing properties to both SchemaModel and SchemaModel and all of their descendants.
    """

    class Builder(ResourceBackedModelMixin.Builder, ImagesMixin.Builder):
        def add_alternate_name(
            self, alternate_name: str | Text
        ) -> SchemaThingMixin.Builder:
            self.add(SDO.alternateName, alternate_name)
            return self

        def add_image(self, image: URIRef) -> SchemaThingMixin.Builder:
            self.add(SDO.image, image)
            return self

        def add_same_as(self, same_as: URIRef) -> SchemaThingMixin.Builder:
            self.add(SDO.sameAs, same_as)
            return self

        def add_url(self, url: URIRef) -> SchemaThingMixin.Builder:
            self.set(SDO.url, url)
            return self

        def copy_description(
            self, description: str | Text | None
        ) -> SchemaThingMixin.Builder:
            from paradicms_etl.models.schema.schema_text_object import SchemaTextObject

            if isinstance(description, str):
                self.set_description(description)
            elif isinstance(description, Text):
                self.set_description(SchemaTextObject.from_text(description))
            elif description is not None:
                raise TypeError(type(description))
            return self

        def copy_same_as(self, other: Model) -> SchemaThingMixin.Builder:
            for same_as_uri in other.same_as_uris:
                self.add_same_as(same_as_uri)
            return self

        def set_description(self, description: str | Text) -> SchemaThingMixin.Builder:
            self.set(SDO.description, description)
            return self

        def set_name(self, name: str) -> SchemaThingMixin.Builder:
            self.set(SDO.name, name)
            return self

    @property
    def description(self) -> str | Text | None:
        return self._optional_value(SDO.description, self._map_term_to_str_or_text)  # type: ignore

    @classmethod
    def json_ld_context(cls):
        return {
            # Override some Thing properties to enforce types
            "@vocab": str(SDO),
            "image": {"@id": str(SDO.image), "@type": "@id"},
            "sameAs": {"@id": str(SDO.sameAs), "@type": "@id"},
            "url": {"@id": str(SDO.url), "@type": "@id"},
        }

    @property
    def image_uris(self) -> tuple[URIRef, ...]:
        return tuple(self._values(SDO.image, self._map_term_to_uri))

    @property
    def label(self) -> str | None:
        return self._optional_value(SDO.name, self._map_term_to_str)

    @property
    def url(self) -> URIRef | None:
        return self._optional_value(SDO.url, self._map_term_to_uri)
