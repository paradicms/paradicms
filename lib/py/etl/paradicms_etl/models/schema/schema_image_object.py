from typing import Union, Optional, Tuple

from rdflib import URIRef, Graph, SDO, Literal, XSD

from paradicms_etl.models.image import Image
from paradicms_etl.models.image_data import ImageData
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.models.schema.schema_media_object_mixin import (
    SchemaMediaObjectMixin,
)
from paradicms_etl.models.schema.schema_model import SchemaModel
from paradicms_etl.models.schema.schema_quantitative_value import (
    SchemaQuantitativeValue,
)
from paradicms_etl.namespaces import CMS
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class SchemaImageObject(SchemaModel, SchemaMediaObjectMixin, Image):
    """
    Schema.org implementation of the Image interface using schema:ImageObject properties.

    See note in SchemaMediaObjectMixin re: why this uses SchemaMediaObjectMixin and doesn't inherit
    SchemaCreativeWork.
    """

    class Builder(SchemaModel.Builder, SchemaMediaObjectMixin.Builder, Image.Builder):
        def add_thumbnail(self, thumbnail: URIRef) -> "SchemaImageObject.Builder":
            self.add(SDO.thumbnail, thumbnail)
            return self

        def build(self) -> "SchemaImageObject":
            return SchemaImageObject(self._resource)

        def copy_rights(self, other: Image) -> "SchemaImageObject.Builder":
            Image.Builder.copy_rights(self, other)
            return self

        def set_caption(self, caption: str) -> "SchemaImageObject.Builder":
            self.set(SDO.caption, caption)
            return self

        def set_copyable(self, copyable: bool) -> "SchemaImageObject.Builder":
            self.set(CMS.imageCopyable, copyable)
            return self

        def set_encoding_format(
            self, encoding_format: str
        ) -> "SchemaImageObject.Builder":
            SchemaMediaObjectMixin.Builder.set_encoding_format(self, encoding_format)
            return self

        def set_exact_dimensions(
            self, exact_dimensions: ImageDimensions
        ) -> "SchemaImageObject.Builder":
            self.set(
                SDO.height,
                SchemaQuantitativeValue.builder()
                .set_value(exact_dimensions.height)
                .build(),
            )
            self.set(
                SDO.width,
                SchemaQuantitativeValue.builder()
                .set_value(exact_dimensions.width)
                .build(),
            )
            return self

        def set_max_dimensions(
            self, max_dimensions: ImageDimensions
        ) -> "SchemaImageObject.Builder":
            self.set(
                SDO.height,
                SchemaQuantitativeValue.builder()
                .set_max_value(max_dimensions.height)
                .build(),
            )
            self.set(
                SDO.width,
                SchemaQuantitativeValue.builder()
                .set_max_value(max_dimensions.width)
                .build(),
            )
            return self

        def set_src(
            self, src: Union[str, ImageData, Literal, URIRef]
        ) -> "SchemaImageObject.Builder":
            self.set(SDO.contentUrl, src)
            return self

        def set_title(self, title: str) -> "SchemaImageObject.Builder":
            return self.set_caption(title)

    @classmethod
    def builder(cls, *, uri: URIRef) -> Builder:
        return cls.Builder(Graph().resource(uri))

    @property
    def caption(self) -> Optional[str]:
        return self._optional_value(SDO.caption, self._map_term_to_str)

    @property
    def copyable(self) -> bool:
        copyable = self._optional_value(CMS.imageCopyable, self._map_term_to_bool)
        return copyable if copyable is not None else True

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
    def label(self) -> Optional[str]:
        return self.caption

    def replacer(self) -> Builder:
        return self.Builder(self._resource)

    @property
    def src(self) -> Union[ImageData, str, URIRef, None]:
        return self._optional_value(  # type:ignore
            SDO.contentUrl, self._map_term_to_image_data_or_str_or_uri
        )

    @property
    def thumbnail_uris(self) -> Tuple[URIRef, ...]:
        return tuple(self._values(SDO.thumbnail, self._map_term_to_uri))
