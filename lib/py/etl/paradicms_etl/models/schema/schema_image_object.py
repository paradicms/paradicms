from __future__ import annotations

from typing import TYPE_CHECKING

from rdflib import SDO, XSD, Graph, Literal, URIRef
from rdflib.resource import Resource

from paradicms_etl.models.image import Image
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.models.schema.schema_media_object_mixin import SchemaMediaObjectMixin
from paradicms_etl.models.schema.schema_model import SchemaModel
from paradicms_etl.models.schema.schema_quantitative_value import (
    SchemaQuantitativeValue,
)
from paradicms_etl.namespaces import CMS
from paradicms_etl.utils.safe_dict_update import safe_dict_update

if TYPE_CHECKING:
    from paradicms_etl.models.image_data import ImageData


class SchemaImageObject(SchemaModel, SchemaMediaObjectMixin, Image):
    """
    Schema.org implementation of the Image interface using schema:ImageObject properties.

    See note in SchemaMediaObjectMixin re: why this uses SchemaMediaObjectMixin and doesn't inherit
    SchemaCreativeWork.
    """

    class Builder(SchemaModel.Builder, SchemaMediaObjectMixin.Builder, Image.Builder):
        def add_thumbnail(self, thumbnail: URIRef) -> SchemaImageObject.Builder:
            self.add(SDO.thumbnail, thumbnail)
            return self

        def build(self) -> SchemaImageObject:
            return SchemaImageObject(self._resource)

        def copy_rights(self, other: Image) -> SchemaImageObject.Builder:
            Image.Builder.copy_rights(self, other)
            return self

        def set_caption(self, caption: str) -> SchemaImageObject.Builder:
            self.set(SDO.caption, caption)
            return self

        def set_copyable(self, copyable: bool) -> SchemaImageObject.Builder:
            self.set(CMS.imageCopyable, copyable)
            return self

        def set_encoding_format(
            self, encoding_format: str
        ) -> SchemaImageObject.Builder:
            SchemaMediaObjectMixin.Builder.set_encoding_format(self, encoding_format)
            return self

        def set_exact_dimensions(
            self, exact_dimensions: ImageDimensions
        ) -> SchemaImageObject.Builder:
            self.set(
                SDO.height,
                SchemaQuantitativeValue.builder(
                    uri=URIRef(
                        f"urn:paradicms:etl:image:exactHeight:{exact_dimensions.height}"
                    )
                )
                .set_value(exact_dimensions.height)
                .build(),
            )
            self.set(
                SDO.width,
                SchemaQuantitativeValue.builder(
                    uri=URIRef(
                        f"urn:paradicms:etl:image:exactWidth:{exact_dimensions.height}"
                    )
                )
                .set_value(exact_dimensions.width)
                .build(),
            )
            return self

        def set_max_dimensions(
            self, max_dimensions: ImageDimensions
        ) -> SchemaImageObject.Builder:
            self.set(
                SDO.height,
                SchemaQuantitativeValue.builder(
                    uri=URIRef(
                        f"urn:paradicms:etl:image:maxHeight:{max_dimensions.height}"
                    )
                )
                .set_max_value(max_dimensions.height)
                .build(),
            )
            self.set(
                SDO.width,
                SchemaQuantitativeValue.builder(
                    uri=URIRef(
                        f"urn:paradicms:etl:image:maxWidth:{max_dimensions.width}"
                    )
                )
                .set_max_value(max_dimensions.width)
                .build(),
            )
            return self

        def set_src(
            self, src: str | ImageData | Literal | URIRef
        ) -> SchemaImageObject.Builder:
            self.set(SDO.contentUrl, src)
            return self

        def set_title(self, title: str) -> SchemaImageObject.Builder:
            return self.set_caption(title)

    @classmethod
    def builder(cls, *, uri: URIRef) -> Builder:
        return cls.Builder(Graph().resource(uri))

    @property
    def caption(self) -> str | None:
        return self._optional_value(SDO.caption, self._map_term_to_str)

    @property
    def copyable(self) -> bool:
        copyable = self._optional_value(CMS.imageCopyable, self._map_term_to_bool)
        return copyable if copyable is not None else True

    @property
    def exact_dimensions(self) -> ImageDimensions | None:
        height_quantitative_value = self._optional_value(
            SDO.height, self._map_term_to_quantitative_value
        )
        width_quantitative_value = self._optional_value(
            SDO.width, self._map_term_to_quantitative_value
        )
        if (
            height_quantitative_value is not None
            and width_quantitative_value is not None
        ):
            height = height_quantitative_value.value
            width = width_quantitative_value.value
            if isinstance(height, int) and isinstance(width, int):
                return ImageDimensions(height=height, width=width)
        return None

    @classmethod
    def from_image(cls, image: Image) -> SchemaImageObject:
        if isinstance(image, SchemaImageObject):
            return image

        builder = cls.builder(uri=image.uri)
        builder.copy_rights(image)
        if image.exact_dimensions is not None:
            builder.set_exact_dimensions(image.exact_dimensions)
        if image.label is not None:
            builder.set_caption(image.label)
        if image.max_dimensions is not None:
            builder.set_exact_dimensions(image.max_dimensions)
        if image.src is not None:
            builder.set_src(image.src)
        return builder.build()

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            SchemaModel.json_ld_context(),
            SchemaMediaObjectMixin.json_ld_context(),
            {
                "copyable": {
                    "@id": str(CMS.imageCopyable),
                    "@type": str(XSD.boolean),
                },
                # TODO: handle DistanceValue's
                # "height": {"@id": str(EXIF.height), "@type": str(XSD.integer)},
                # "maxHeight": {
                #     "@id": str(CMS.imageMaxHeight),
                #     "@type": str(XSD.integer),
                # },
                # "maxWidth": {
                #     "@id": str(CMS.imageMaxWidth),
                #     "@type": str(XSD.integer),
                # },
                # "width": {"@id": str(EXIF.width), "@type": str(XSD.integer)},
                "src": {"@id": str(CMS.imageSrc)},
                "thumbnail": {"@id": str(SDO.thumbnail), "@type": "@id"},
            },
        )

    @property
    def label(self) -> str | None:
        return self.caption

    @staticmethod
    def _map_term_to_quantitative_value(
        term: Literal | Resource,
    ) -> SchemaQuantitativeValue | None:
        if not isinstance(term, Resource):
            return None
        return SchemaQuantitativeValue(term)

    @property
    def max_dimensions(self) -> ImageDimensions | None:
        height_quantitative_value = self._optional_value(
            SDO.height, self._map_term_to_quantitative_value
        )
        width_quantitative_value = self._optional_value(
            SDO.width, self._map_term_to_quantitative_value
        )
        if (
            height_quantitative_value is not None
            and width_quantitative_value is not None
        ):
            height = height_quantitative_value.max_value
            width = width_quantitative_value.max_value
            if isinstance(height, int) and isinstance(width, int):
                return ImageDimensions(height=height, width=width)
        return None

    def replacer(self) -> Builder:
        return self.Builder(self.resource)

    @property
    def src(self) -> ImageData | str | URIRef | None:
        return self._optional_value(  # type:ignore
            SDO.contentUrl, self._map_term_to_image_data_or_str_or_uri
        )

    @property
    def thumbnail_uris(self) -> tuple[URIRef, ...]:
        return tuple(self._values(SDO.thumbnail, self._map_term_to_uri))
