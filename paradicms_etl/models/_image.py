from dataclasses import dataclass
from datetime import datetime
from typing import Optional

from rdflib import Graph, Literal, URIRef
from rdflib.namespace import DCTERMS, FOAF
from rdflib.resource import Resource

from paradicms_etl.models._named_model import _NamedModel
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.namespace import CMS, EXIF


@dataclass(frozen=True)
class _Image(_NamedModel):
    """
    Base class for image models that can be reused by other systems.
    """

    created: Optional[datetime]
    exact_dimensions: Optional[ImageDimensions]
    format: Optional[str]
    max_dimensions: Optional[ImageDimensions]
    modified: Optional[datetime]
    original_image_uri: Optional[URIRef]

    def to_rdf(self, *, graph: Graph) -> Resource:
        resource = _NamedModel.to_rdf(self, graph=graph)
        if self.created is not None:
            resource.add(DCTERMS.created, Literal(self.created))
        if self.format is not None:
            resource.add(DCTERMS["format"], Literal(self.format))
        if self.exact_dimensions is not None:
            resource.add(EXIF.height, Literal(self.exact_dimensions.height))
            resource.add(EXIF.width, Literal(self.exact_dimensions.width))
        elif self.max_dimensions is not None:
            resource.add(CMS.imageMaxHeight, Literal(self.max_dimensions.height))
            resource.add(CMS.imageMaxWidth, Literal(self.max_dimensions.width))
        if self.modified is not None:
            resource.add(DCTERMS.modified, Literal(self.modified))
        if self.original_image_uri is not None:
            graph.add((self.original_image_uri, FOAF.thumbnail, self.uri))
        return resource
