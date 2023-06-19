from typing import Union, Optional, Tuple

from rdflib import URIRef, Graph, SDO, Literal, XSD

from paradicms_etl.models.image import Image
from paradicms_etl.models.image_data import ImageData
from paradicms_etl.models.schema.schema_creative_work_mixin import (
    SchemaCreativeWorkMixin,
)
from paradicms_etl.models.schema.schema_named_model import SchemaNamedModel
from paradicms_etl.namespaces import CMS
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class SchemaImage(SchemaNamedModel, SchemaCreativeWorkMixin, Image):
    class Builder(
        SchemaNamedModel.Builder, SchemaCreativeWorkMixin.Builder, Image.Builder
    ):
        def add_thumbnail(
            self, thumbnail: Union[Image, URIRef]
        ) -> "SchemaImage.Builder":
            self.add(SDO.thumbnail, thumbnail)
            return self

        def build(self) -> "SchemaImage":
            return SchemaImage(self._resource)

        def set_copyable(self, copyable: bool) -> "SchemaImage.Builder":
            self.set(CMS.imageCopyable, copyable)
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
    def copyable(self) -> bool:
        copyable = self._optional_value(CMS.imageCopyable, self._map_bool_value)
        return copyable if copyable is not None else True

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            SchemaNamedModel.json_ld_context(),
            SchemaCreativeWorkMixin.json_ld_context(),
            {
                "copyable": {
                    "@id": str(CMS.imageCopyable),
                    "@type": str(XSD.boolean),
                },
            },
        )

    @property
    def label(self) -> Optional[str]:
        return self.caption

    def replacer(self) -> Builder:
        return self.Builder(self._resource)

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return SDO.ImageObject

    @property
    def src(self) -> Union[ImageData, str, URIRef, None]:
        return self._optional_value(  # type:ignore
            SDO.contentUrl, self._map_image_data_or_str_or_uri_value
        )

    @property
    def thumbnail_uris(self) -> Tuple[URIRef, ...]:
        return tuple(self._values(SDO.thumbnail, self._map_uri_value))

    @property
    def uri(self) -> URIRef:
        return super().uri
