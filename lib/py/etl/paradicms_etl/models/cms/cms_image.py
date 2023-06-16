from datetime import datetime
from typing import Optional, Union, Tuple

from rdflib import Literal, URIRef, Graph, XSD
from rdflib.namespace import DCTERMS, FOAF

from paradicms_etl.models.cms.cms_named_model import CmsNamedModel
from paradicms_etl.models.cms.cms_rights_mixin import CmsRightsMixin
from paradicms_etl.models.image import Image
from paradicms_etl.models.image_data import ImageData
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.models.rights_mixin import RightsMixin
from paradicms_etl.namespaces import CMS, EXIF
from paradicms_etl.utils.clone_graph import clone_graph
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class CmsImage(CmsNamedModel, CmsRightsMixin, Image):
    class Builder(CmsNamedModel.Builder, CmsRightsMixin.Builder, Image.Builder):
        def build(self) -> "CmsImage":
            return CmsImage(self._resource)

        def add_thumbnail(self, thumbnail: Union[Image, URIRef]) -> "CmsImage.Builder":
            self.add(FOAF.thumbnail, thumbnail)
            return self

        def copy_rights(self, other: RightsMixin) -> "CmsImage.Builder":
            CmsRightsMixin.Builder.copy_rights(self, other)
            return self

        def set_copyable(self, copyable: bool) -> "CmsImage.Builder":
            self.set(CMS.imageCopyable, copyable)
            return self

        def set_created(self, created: datetime) -> "CmsImage.Builder":
            self.set(DCTERMS.created, created)
            return self

        def set_exact_dimensions(
            self, exact_dimensions: ImageDimensions
        ) -> "CmsImage.Builder":
            self.set(EXIF.height, exact_dimensions.height)
            self.set(EXIF.width, exact_dimensions.width)
            return self

        def set_format(self, format_: str) -> "CmsImage.Builder":
            self.set(DCTERMS["format"], format_)
            return self

        def set_max_dimensions(
            self, max_dimensions: ImageDimensions
        ) -> "CmsImage.Builder":
            self.set(CMS.imageMaxHeight, max_dimensions.height)
            self.set(CMS.imageMaxWidth, max_dimensions.width)
            return self

        def set_modified(self, modified: datetime) -> "CmsImage.Builder":
            self.set(DCTERMS.modified, modified)
            return self

        def set_source(self, source: URIRef) -> "CmsImage.Builder":
            self.set(DCTERMS.source, source)
            return self

        def set_src(
            self, src: Union[str, ImageData, Literal, URIRef]
        ) -> "CmsImage.Builder":
            self.set(CMS.imageSrc, src)
            return self

        def set_title(self, title: str) -> "CmsImage.Builder":
            self.set(DCTERMS.title, title)
            return self

    @classmethod
    def builder(cls, *, uri: URIRef) -> Builder:
        builder = cls.Builder(Graph().resource(uri))
        return builder

    @property
    def copyable(self) -> bool:
        copyable = self._optional_value(CMS.imageCopyable, self._map_bool_value)
        return copyable if copyable is not None else True

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            CmsNamedModel.json_ld_context(),
            CmsRightsMixin.json_ld_context(),
            {
                "copyable": {
                    "@id": str(CMS.imageCopyable),
                    "@type": str(XSD.boolean),
                },
                "created": {
                    "@id": str(DCTERMS.created),
                    "@type": str(XSD.dateTime),
                },
                "format": {"@id": str(DCTERMS.format)},
                "height": {"@id": str(EXIF.height), "@type": str(XSD.integer)},
                "maxHeight": {
                    "@id": str(CMS.imageMaxHeight),
                    "@type": str(XSD.integer),
                },
                "maxWidth": {
                    "@id": str(CMS.imageMaxWidth),
                    "@type": str(XSD.integer),
                },
                "modified": {
                    "@id": str(DCTERMS.modified),
                    "@type": str(XSD.dateTime),
                },
                "source": {"@id": str(DCTERMS.source), "@type": "@id"},
                "src": {"@id": str(CMS.imageSrc)},
                "thumbnail": {"@id": str(FOAF.thumbnail), "@type": "@id"},
                "thumbnailOf": {"@id": str(CMS.thumbnailOf), "@type": "@id"},
                "title": {"@id": str(DCTERMS.title), "@type": "@id"},
                "width": {"@id": str(EXIF.width), "@type": str(XSD.integer)},
            },
        )

    @property
    def original_image_uri(self) -> Optional[URIRef]:
        graph = self._resource.graph
        original_image_uri = graph.value(
            None, FOAF.thumbnail, self._resource.identifier
        )
        if original_image_uri is not None and not isinstance(
            original_image_uri, URIRef
        ):
            raise TypeError("expected original image URI to be a URIRef")
        return original_image_uri

    @property
    def label(self) -> Optional[str]:
        return self.title

    @classmethod
    def label_property_uri(cls):
        return DCTERMS.title

    def replacer(self) -> Builder:
        return self.Builder(
            clone_graph(self._resource.graph).resource(self._resource.identifier)
        )

    @property
    def src(self) -> Union[ImageData, str, URIRef, None]:
        return self._optional_value(
            CMS.imageSrc, self._map_image_data_or_str_or_uri_value
        )

    @property
    def thumbnail_uris(self) -> Tuple[URIRef, ...]:
        return tuple(self._values(FOAF.thumbnail, self._map_uri_value))

    @property
    def title(self):
        return self._optional_value(DCTERMS.title, self._map_str_value)

    @property
    def uri(self) -> URIRef:
        return super().uri
