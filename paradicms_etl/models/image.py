from datetime import datetime
from typing import Optional

from rdflib import Graph, Literal, URIRef
from rdflib.namespace import DCTERMS, FOAF
from rdflib.resource import Resource

from paradicms_etl.models._named_model import _NamedModel
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.models.rights import Rights
from paradicms_etl.namespace import CMS, EXIF
from paradicms_etl.utils.rdf_resource_wrapper import RdfResourceWrapper


class Image(_NamedModel):
    def __init__(
        self,
        *,
        depicts_uri: URIRef,
        uri: URIRef,
        copyable: bool = True,
        # Can this image be copied from its source (for GUI building), or does it have to be hot linked in order to use it?
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
    ):
        _NamedModel.__init__(self, uri=uri)
        self.__copyable = copyable
        if created is not None:
            self.resource.add(DCTERMS.created, Literal(created))
        self.resource.add(FOAF.depicts, depicts_uri)
        if format is not None:
            self.resource.add(DCTERMS["format"], Literal(format))
        if exact_dimensions is not None:
            self.resource.add(EXIF.height, Literal(exact_dimensions.height))
            self.resource.add(EXIF.width, Literal(exact_dimensions.width))
        elif max_dimensions is not None:
            self.resource.add(CMS.imageMaxHeight, Literal(max_dimensions.height))
            self.resource.add(CMS.imageMaxWidth, Literal(max_dimensions.width))
        if modified is not None:
            self.resource.add(DCTERMS.modified, Literal(modified))
        if original_image_uri is not None:
            self.resource.graph.add((original_image_uri, FOAF.thumbnail, uri))
        if rights is not None:
            rights.to_rdf(add_to_resource=self.resource)
        if src is not None:
            self.resource.add(CMS.imageSrc, Literal(src))

    @property
    def copyable(self):
        return self.__copyable

    @classmethod
    def from_rdf(cls, *, resource: Resource):
        resource_wrapper = RdfResourceWrapper(resource)

        def image_dimensions(height_p, width_p):
            height = resource_wrapper.optional_python_value(height_p, int)
            width = resource_wrapper.optional_python_value(width_p, int)
            if height is not None and width is not None:
                return ImageDimensions(height=height, width=width)
            elif height is None and width is None:
                return None
            else:
                raise ValueError(f"expected both height and width properties")

        exact_dimensions = image_dimensions(EXIF.height, EXIF.width)
        max_dimensions = (
            image_dimensions(CMS.imageMaxHeight, CMS.imageMaxWidth)
            if exact_dimensions is None
            else None
        )

        graph = resource.graph
        assert isinstance(graph, Graph)
        original_image_uri = graph.value(None, FOAF.thumbnail, resource.identifier)
        if original_image_uri is not None and not isinstance(
            original_image_uri, URIRef
        ):
            raise TypeError("expected original image URI to be a URIRef")

        return cls(
            created=resource_wrapper.optional_python_value(DCTERMS.created, datetime),
            depicts_uri=resource_wrapper.required_uri_value(FOAF.depicts),
            exact_dimensions=exact_dimensions,
            format=resource_wrapper.optional_python_value(DCTERMS["format"], str),
            max_dimensions=max_dimensions,
            modified=resource_wrapper.optional_python_value(DCTERMS.modified, datetime),
            rights=Rights.from_rdf(resource=resource),
            original_image_uri=original_image_uri,
            src=resource_wrapper.optional_python_value(CMS.imageSrc, str),
            uri=resource.identifier,
        )
