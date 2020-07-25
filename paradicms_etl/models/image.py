from dataclasses import dataclass, field
from datetime import datetime
from typing import List, Optional

from dataclasses_json import dataclass_json
from rdflib import Graph, Literal, URIRef
from rdflib.namespace import DCTERMS, FOAF, RDF
from rdflib.resource import Resource

from paradicms_etl._model import _Model
from paradicms_etl.models.image_dimensions import ImageDimensions
from paradicms_etl.namespace import CMS, EXIF


@dataclass_json
@dataclass
class Image(_Model):
    created: Optional[datetime] = None
    derived_image_uris: List[URIRef] = field(default_factory=list)
    exact_dimensions: Optional[ImageDimensions] = None
    format: Optional[str] = None
    height: Optional[int] = None
    max_dimensions: Optional[ImageDimensions] = None
    modified: Optional[datetime] = None

    def to_rdf(self, *, graph: Graph) -> Resource:
        resource = _Model.to_rdf(self, graph=graph)
        resource.add(RDF.type, CMS[self.__class__.__name__])
        if self.created is not None:
            resource.add(DCTERMS.created, Literal(self.created))
        for derived_image_uri in self.derived_image_uris:
            resource.add(FOAF.thumbnail, derived_image_uri)
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
        return resource
