from datetime import datetime
from typing import Optional, Union

from rdflib import Literal, URIRef, Graph, XSD
from rdflib.namespace import DCTERMS, FOAF
from rdflib.resource import Resource

from paradicms_etl.models.cms.cms_image_data import CmsImageData
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
    class Builder(CmsNamedModel.Builder, CmsRightsMixin.Builder):
        def build(self) -> "CmsImage":
            return CmsImage(self._resource)

        def copy_rights(self, other: RightsMixin) -> "CmsImage.Builder":
            CmsRightsMixin.Builder.copy_rights(self, other)
            return self

        def set_copyable(self, copyable: bool) -> "CmsImage.Builder":
            """
            Can this image be copied from its source (for GUI building), or does it have to be hot linked in order to use it?
            """
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

        def set_original_image_uri(
            self, original_image_uri: URIRef
        ) -> "CmsImage.Builder":
            # (original, foaf:thumbnail, derived)
            self._resource.graph.add(
                (original_image_uri, FOAF.thumbnail, self._resource.identifier)
            )
            # (derived, cms:thumbnailOf, original)
            # These quads are faster to query than the foaf:thumbnail ones.
            self.add(CMS.thumbnailOf, original_image_uri)
            return self

        def set_src(
            self, src: Union[str, CmsImageData, Literal, URIRef]
        ) -> "CmsImage.Builder":
            """
            src that can be used in an <img> tag; if not specified, defaults to URI
            """
            self.set(CMS.imageSrc, src)
            return self

        def set_title(self, title: str) -> "CmsImage.Builder":
            self.set(DCTERMS.title, title)
            return self

    def __init__(self, resource: Resource):
        CmsNamedModel.__init__(self, resource)
        self.depicts_uri

    @classmethod
    def builder(cls, *, depicts_uri: URIRef, uri: URIRef) -> Builder:
        builder = cls.Builder(Graph().resource(uri))
        builder.set(FOAF.depicts, depicts_uri)
        return builder

    @property
    def copyable(self) -> bool:
        copyable = self._optional_bool_value(CMS.imageCopyable)
        return copyable if copyable is not None else True

    @property
    def depicts_uri(self) -> URIRef:
        return self._required_uri_value(FOAF.depicts)

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            safe_dict_update(
                CmsNamedModel.json_ld_context(),
                {
                    "copyable": {
                        "@id": str(CMS.imageCopyable),
                        "@type": str(XSD.boolean),
                    },
                    "created": {
                        "@id": str(DCTERMS.created),
                        "@type": str(XSD.dateTime),
                    },
                    "depicts": {"@id": str(FOAF.depicts), "@type": "@id"},
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
            ),
            CmsRightsMixin.json_ld_context(),
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
    def src(self) -> Union[ImageData, str, None]:
        for o in self._resource.objects(CMS.imageSrc):
            if isinstance(o, Literal):
                o_python = o.toPython()
                if isinstance(o_python, str):
                    return o_python
                else:
                    raise TypeError(
                        f"expected {CMS.imageSrc} literal to be a bytes or string, not a {type(o_python)}"
                    )
            elif isinstance(o, Resource):
                return CmsImageData(o)
            else:
                continue
        return None

    @property
    def title(self):
        return self._optional_str_value(DCTERMS.title)

    @property
    def uri(self) -> URIRef:
        return super().uri
