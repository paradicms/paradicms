from dataclasses import dataclass
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


@dataclass(frozen=True)
class Image(_NamedModel):
    depicts_uri: URIRef  # Collection, institution, or object
    institution_uri: URIRef  # So images can be grouped by institution
    copyable: bool = True  # Can this image be copied from its source (for GUI building), or does it have to be hot linked in order to use it?
    created: Optional[datetime] = None
    exact_dimensions: Optional[ImageDimensions] = None
    format: Optional[str] = None
    max_dimensions: Optional[ImageDimensions] = None
    modified: Optional[datetime] = None
    original_image_uri: Optional[URIRef] = None
    rights: Optional[Rights] = None
    src: Optional[
        str
    ] = None  # src that can be used in an <img> tag; if not specified, defaults to URI

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
            institution_uri=resource_wrapper.required_uri_value(CMS.institution),
            max_dimensions=max_dimensions,
            modified=resource_wrapper.optional_python_value(DCTERMS.modified, datetime),
            rights=Rights.from_rdf(resource),
            original_image_uri=original_image_uri,
            src=resource_wrapper.optional_python_value(CMS.imageSrc, str),
            uri=resource.identifier,
        )

    def to_rdf(self, *, graph: Graph) -> Resource:
        resource = _NamedModel.to_rdf(self, graph=graph)
        if self.created is not None:
            resource.add(DCTERMS.created, Literal(self.created))
        resource.add(FOAF.depicts, self.depicts_uri)
        if self.format is not None:
            resource.add(DCTERMS["format"], Literal(self.format))
        if self.exact_dimensions is not None:
            resource.add(EXIF.height, Literal(self.exact_dimensions.height))
            resource.add(EXIF.width, Literal(self.exact_dimensions.width))
        elif self.max_dimensions is not None:
            resource.add(CMS.imageMaxHeight, Literal(self.max_dimensions.height))
            resource.add(CMS.imageMaxWidth, Literal(self.max_dimensions.width))
        resource.add(CMS.institution, self.institution_uri)
        if self.modified is not None:
            resource.add(DCTERMS.modified, Literal(self.modified))
        if self.original_image_uri is not None:
            graph.add((self.original_image_uri, FOAF.thumbnail, self.uri))
        if self.rights is not None:
            self.rights.to_rdf(add_to_resource=resource)
        if self.src is not None:
            resource.add(CMS.imageSrc, Literal(self.src))
        return resource
