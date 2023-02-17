from datetime import datetime
from typing import Optional

from rdflib import Literal, URIRef, Graph, RDF
from rdflib.namespace import DCTERMS, FOAF
from rdflib.resource import Resource

from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.models.rights import Rights
from paradicms_etl.namespaces import CMS, EXIF
from paradicms_etl.utils.resource_builder import ResourceBuilder


class Image(ResourceBackedNamedModel):
    DEFAULT_NAMESPACE = DCTERMS
    LABEL_PROPERTY = DCTERMS.title

    def __init__(self, resource: Resource):
        resource.add(RDF.type, CMS[self.__class__.__name__])
        ResourceBackedNamedModel.__init__(self, resource)
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
            # (original, foaf:thumbnail, derived)
            resource.graph.add((original_image_uri, FOAF.thumbnail, uri))
            # (derived, cms:thumbnailOf, original)
            # These quads are faster to query than the foaf:thumbnail ones.
            resource_builder.add(CMS.thumbnailOf, original_image_uri)

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
