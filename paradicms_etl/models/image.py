from datetime import datetime
from typing import Optional

from rdflib import Literal, URIRef
from rdflib.namespace import DCTERMS, FOAF, RDFS

from paradicms_etl.models._named_model import _NamedModel
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.models.rights import Rights
from paradicms_etl.namespace import CMS, EXIF


# def image_dimensions(height_p, width_p):
#     height = resource_wrapper.optional_python_value(height_p, int)
#     width = resource_wrapper.optional_python_value(width_p, int)
#     if height is not None and width is not None:
#         return ImageDimensions(height=height, width=width)
#     elif height is None and width is None:
#         return None
#     else:
#         raise ValueError(f"expected both height and width properties")
#
# exact_dimensions = image_dimensions(EXIF.height, EXIF.width)
# max_dimensions = (
#     image_dimensions(CMS.imageMaxHeight, CMS.imageMaxWidth)
#     if exact_dimensions is None
#     else None
# )


class Image(_NamedModel):
    def __init__(self, *args, **kwds):
        _NamedModel.__init__(self, *args, **kwds)
        self.depicts_uri

    @classmethod
    def from_fields(
        cls,
        *,
        depicts_uri: URIRef,
        uri: URIRef,
        # Can this image be copied from its source (for GUI building), or does it have to be hot linked in order to use it?
        copyable: bool = True,
        created: Optional[datetime] = None,
        exact_dimensions: Optional[ImageDimensions] = None,
        format: Optional[str] = None,
        label: Optional[str] = None,
        max_dimensions: Optional[ImageDimensions] = None,
        modified: Optional[datetime] = None,
        original_image_uri: Optional[URIRef] = None,
        rights: Optional[Rights] = None,
        src: Optional[
            str
        ] = None,  # src that can be used in an <img> tag; if not specified, defaults to URI
    ):
        resource = cls._create_resource(identifier=uri)
        resource.add(CMS.imageCopyable, Literal(copyable))
        if created is not None:
            resource.add(DCTERMS.created, Literal(created))
        resource.add(FOAF.depicts, depicts_uri)
        if format is not None:
            resource.add(DCTERMS["format"], Literal(format))
        if exact_dimensions is not None:
            resource.add(EXIF.height, Literal(exact_dimensions.height))
            resource.add(EXIF.width, Literal(exact_dimensions.width))
        elif max_dimensions is not None:
            resource.add(CMS.imageMaxHeight, Literal(max_dimensions.height))
            resource.add(CMS.imageMaxWidth, Literal(max_dimensions.width))
        if label is not None:
            resource.add(RDFS.label, Literal(label))
        if modified is not None:
            resource.add(DCTERMS.modified, Literal(modified))
        if original_image_uri is not None:
            resource.graph.add((original_image_uri, FOAF.thumbnail, uri))
        if rights is not None:
            rights.to_rdf(add_to_resource=resource)
        if src is not None:
            resource.add(CMS.imageSrc, Literal(src))
        return cls(resource)

    @property
    def copyable(self) -> bool:
        copyable = self._optional_bool_value(CMS.imageCopyable)
        return copyable if copyable is not None else True

    @property
    def depicts_uri(self) -> URIRef:
        return self._required_uri_value(FOAF.depicts)

    @property
    def label(self):
        return self._optional_str_value(RDFS.label)

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

    def replace(self, *, copyable: Optional[bool] = None, src: Optional[str] = None):
        resource = self._copy_resource(self._resource)
        if copyable is not None:
            resource.remove(CMS.imageCopyable)
            resource.add(CMS.imageCopyable, Literal(copyable))
        if src is not None:
            resource.remove(CMS.imageSrc)
            resource.add(CMS.imageSrc, Literal(src))
        return self.__class__(resource)

    @property
    def rights(self) -> Optional[Rights]:
        return Rights.from_rdf(resource=self._resource)

    @property
    def src(self) -> Optional[str]:
        return self._optional_str_value(CMS.imageSrc)
