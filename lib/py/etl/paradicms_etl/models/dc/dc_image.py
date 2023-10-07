from __future__ import annotations

from typing import TYPE_CHECKING

from rdflib import DCMITYPE, XSD, Graph, Literal, URIRef
from rdflib.namespace import DCTERMS

from paradicms_etl.models.dc.dc_model import DcModel
from paradicms_etl.models.dc.dc_rights_mixin import DcRightsMixin
from paradicms_etl.models.image import Image
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.namespaces import CMS, EXIF
from paradicms_etl.utils.clone_graph import clone_graph
from paradicms_etl.utils.safe_dict_update import safe_dict_update

if TYPE_CHECKING:
    from paradicms_etl.models.date_time_union import DateTimeUnion
    from paradicms_etl.models.image_data import ImageData


class DcImage(DcModel, DcRightsMixin, Image):
    """
    A dcmitype:Image.
    """

    class Builder(DcModel.Builder, DcRightsMixin.Builder, Image.Builder):
        def add_identifier(self, identifier: str) -> DcImage.Builder:
            self.add(DCTERMS.identifier, identifier)
            return self

        def add_thumbnail(self, thumbnail: URIRef) -> DcImage.Builder:
            # (thumbnail, dcterms:source, original image) in this graph.
            # Dublin Core doesn't have an inverse of dcterms:source.
            self._resource.graph.add(
                (
                    thumbnail.uri if isinstance(thumbnail, Image) else thumbnail,
                    DCTERMS.source,
                    self._resource.identifier,
                )
            )
            return self

        def build(self) -> DcImage:
            return DcImage(self._resource)

        def copy_rights(self, other: Image) -> DcImage.Builder:
            Image.Builder.copy_rights(self, other)
            return self

        def set_copyable(self, copyable: bool) -> DcImage.Builder:  # noqa: FBT001
            self.set(CMS.imageCopyable, copyable)
            return self

        def set_created(self, created: DateTimeUnion) -> DcImage.Builder:
            super().set_created(created)
            return self

        def set_exact_dimensions(
            self, exact_dimensions: ImageDimensions
        ) -> DcImage.Builder:
            self.set(EXIF.height, exact_dimensions.height)
            self.set(EXIF.width, exact_dimensions.width)
            return self

        def set_format(self, format_: str) -> DcImage.Builder:
            self.set(DCTERMS["format"], format_)
            return self

        def set_max_dimensions(
            self, max_dimensions: ImageDimensions
        ) -> DcImage.Builder:
            self.set(CMS.imageMaxHeight, max_dimensions.height)
            self.set(CMS.imageMaxWidth, max_dimensions.width)
            return self

        def set_modified(self, modified: DateTimeUnion) -> DcImage.Builder:
            super().set_modified(modified)
            return self

        def set_src(self, src: str | ImageData | Literal | URIRef) -> DcImage.Builder:
            self.set(CMS.imageSrc, src)
            return self

        def set_title(self, title: str) -> DcImage.Builder:
            super().set_title(title)
            return self

    @classmethod
    def builder(cls, *, uri: URIRef) -> Builder:
        return cls.Builder(Graph().resource(uri))

    @property
    def copyable(self) -> bool:
        copyable = self._optional_value(CMS.imageCopyable, self._map_term_to_bool)
        return copyable if copyable is not None else True

    @property
    def exact_dimensions(self) -> ImageDimensions | None:
        height = self._optional_value(EXIF.height, self._map_term_to_int)
        width = self._optional_value(EXIF.width, self._map_term_to_int)
        if height is not None and width is not None:
            return ImageDimensions(height=height, width=width)
        return None

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            DcModel.json_ld_context(),
            {
                "copyable": {
                    "@id": str(CMS.imageCopyable),
                    "@type": str(XSD.boolean),
                },
                "height": {"@id": str(EXIF.height), "@type": str(XSD.integer)},
                "maxHeight": {
                    "@id": str(CMS.imageMaxHeight),
                    "@type": str(XSD.integer),
                },
                "maxWidth": {
                    "@id": str(CMS.imageMaxWidth),
                    "@type": str(XSD.integer),
                },
                "src": {"@id": str(CMS.imageSrc)},
                "width": {"@id": str(EXIF.width), "@type": str(XSD.integer)},
            },
        )

    @property
    def max_dimensions(self) -> ImageDimensions | None:
        height = self._optional_value(CMS.imageMaxHeight, self._map_term_to_int)
        width = self._optional_value(CMS.imageMaxWidth, self._map_term_to_int)
        if height is not None and width is not None:
            return ImageDimensions(height=height, width=width)
        return None

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return DCMITYPE.Image

    def replacer(self) -> Builder:
        return self.Builder(
            clone_graph(self._resource.graph).resource(self._resource.identifier)
        )

    @property
    def src(self) -> ImageData | str | URIRef | None:
        return self._optional_value(  # type: ignore
            CMS.imageSrc, self._map_term_to_image_data_or_str_or_uri
        )

    @property
    def thumbnail_uris(self) -> tuple[URIRef, ...]:
        return tuple(
            subject
            for subject in self._resource.graph.subjects(
                object=self._resource.identifier, predicate=DCTERMS.source
            )
            if isinstance(subject, URIRef)
        )
