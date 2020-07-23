from dataclasses import dataclass, field
from datetime import datetime
from typing import List, Optional

from dataclasses_json import dataclass_json
from rdflib import Graph, Literal, URIRef
from rdflib.namespace import DCTERMS, FOAF, RDF
from rdflib.resource import Resource

from paradicms_etl._model import _Model
from paradicms_etl.namespace import CMS, EXIF


@dataclass_json
@dataclass
class Image(_Model):
    created: Optional[datetime] = None
    derived_images: List[URIRef] = field(default_factory=list)
    format: Optional[str] = None
    height: Optional[int] = None
    max_height: Optional[int] = None
    max_width: Optional[int] = None
    modified: Optional[datetime] = None
    width: Optional[int] = None

    def to_rdf(self, *, graph: Graph) -> Resource:
        resource = _Model.to_rdf(self, graph=graph)
        resource.add(RDF.type, CMS[self.__class__.__name__])
        if self.created is not None:
            resource.add(DCTERMS.created, Literal(self.created))
        for derived_image_uri in self.derived_images:
            resource.add(FOAF.thumbnail, derived_image_uri)
        if self.format is not None:
            resource.add(DCTERMS["format"], Literal(self.format))
        if self.height is not None:
            resource.add(EXIF.height, Literal(self.height))
        if self.max_height is not None:
            resource.add(CMS.imageMaxHeight, Literal(self.max_height))
        if self.max_width is not None:
            resource.add(CMS.imageMaxWidth, Literal(self.max_width))
        if self.modified is not None:
            resource.add(DCTERMS.modified, Literal(self.modified))
        if self.width is not None:
            resource.add(EXIF.width, Literal(self.width))
        return resource
