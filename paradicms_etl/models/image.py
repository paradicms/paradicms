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
        return resource
