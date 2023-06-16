from typing import Union, Optional, Tuple

from rdflib import URIRef, Graph, SDO, Literal

from paradicms_etl.models.image import Image
from paradicms_etl.models.image_data import ImageData
from paradicms_etl.models.schema.schema_creative_work_mixin import (
    SchemaCreativeWorkMixin,
)
from paradicms_etl.models.schema.schema_named_model import SchemaNamedModel
from paradicms_etl.namespaces import CMS


class SchemaImage(SchemaNamedModel, SchemaCreativeWorkMixin, Image):
    class Builder(
        SchemaNamedModel.Builder, SchemaCreativeWorkMixin.Builder, Image.Builder
    ):
        def add_thumbnail(self, thumbnail: Union[Image, URIRef]) -> "CmsImage.Builder":
            self.add(SDO.thumbnail, thumbnail)
            return self

        def build(self) -> "SchemaImage":
            return SchemaImage(self._resource)

        def set_copyable(self, copyable: bool) -> "SchemaImage.Builder":
            self.set(CMS.imageCopyable, copyable)
            return self

        def set_source(self, source: URIRef) -> "SchemaImage.Builder":
            self.set(SDO.url, source)
            return self

        def set_src(
            self, src: Union[str, ImageData, Literal, URIRef]
        ) -> "SchemaImage.Builder":
            self.set(SDO.contentUrl, src)
            return self

        def set_title(self, title: str) -> "SchemaImage.Builder":
            self.set(SDO.caption, title)
            return self

    @classmethod
    def builder(cls, *, uri: URIRef) -> Builder:
        return cls.Builder(Graph().resource(uri))

    @property
    def caption(self) -> Optional[str]:
        return self._optional_value(SDO.caption, self._map_str_value)

    @property
    def label(self) -> Optional[str]:
        return self.caption

    @property
    def copyable(self) -> bool:
        copyable = self._optional_value(CMS.imageCopyable, self._map_bool_value)
        return copyable if copyable is not None else True

    def replacer(self) -> Builder:
        return self.Builder(self._resource)

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return SDO.ImageObject

    @property
    def source(self) -> Optional[URIRef]:
        return self._optional_value(SDO.url, self._map_uri_value)

    def src(self) -> Union[ImageData, str, None]:
        return self._optional_value(
            SDO.contentUrl, self._map_image_data_or_str_or_uri_value
        )

    @property
    def thumbnail_uris(self) -> Tuple[URIRef, ...]:
        return tuple(self._values(SDO.thumbnail, self._map_uri_value))

    @property
    def uri(self) -> URIRef:
        return super().uri
