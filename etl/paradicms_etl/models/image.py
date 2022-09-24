from datetime import datetime
from typing import Optional

from rdflib import Literal, URIRef, Graph, RDF
from rdflib.namespace import DCTERMS, FOAF

from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.models.rights import Rights
from paradicms_etl.namespaces import CMS, EXIF

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
from paradicms_etl.utils.resource_builder import ResourceBuilder


class Image(ResourceBackedNamedModel):
    def __init__(self, *args, **kwds):
        ResourceBackedNamedModel.__init__(self, *args, **kwds)
        self._check_rdf_type(CMS[self.__class__.__name__])
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
        max_dimensions: Optional[ImageDimensions] = None,
        modified: Optional[datetime] = None,
        original_image_uri: Optional[URIRef] = None,
        rights: Optional[Rights] = None,
        src: Optional[
            str
        ] = None,  # src that can be used in an <img> tag; if not specified, defaults to URI
        title: Optional[str] = None,
    ) -> "Image":
        resource_builder = (
            ResourceBuilder(uri)
            .add(RDF.type, CMS[cls.__name__])
            .add(CMS.imageCopyable, copyable)
            .add(DCTERMS.created, created)
            .add(FOAF.depicts, depicts_uri)
            .add(DCTERMS["format"], format)
            .add(DCTERMS.modified, modified)
            .add(DCTERMS.title, title)
            .add_rights(rights)
            .add(CMS.imageSrc, src)
        )

        if exact_dimensions is not None:
            resource_builder.add(EXIF.height, exact_dimensions.height)
            resource_builder.add(EXIF.width, exact_dimensions.width)
        elif max_dimensions is not None:
            resource_builder.add(CMS.imageMaxHeight, max_dimensions.height)
            resource_builder.add(CMS.imageMaxWidth, max_dimensions.width)

        resource = resource_builder.build()

        if original_image_uri is not None:
            resource.graph.add((original_image_uri, FOAF.thumbnail, uri))

        return cls(resource)

    @property
    def copyable(self) -> bool:
        copyable = self._optional_bool_value(CMS.imageCopyable)
        return copyable if copyable is not None else True

    @property
    def depicts_uri(self) -> URIRef:
        return self._required_uri_value(FOAF.depicts)

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
        graph = Graph()
        graph += self._resource.graph
        resource = graph.resource(self._resource.identifier)
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

    @property
    def title(self):
        return self._optional_str_value(DCTERMS.title)
