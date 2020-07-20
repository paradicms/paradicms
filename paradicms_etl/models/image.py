from dataclasses import dataclass
from datetime import datetime
from typing import Optional

from dataclasses_json import dataclass_json
from rdflib import Graph
from rdflib.namespace import DCTERMS
from rdflib.resource import Resource

from paradicms_etl._model import _Model
from paradicms_etl.namespace import CMS, EXIF


@dataclass_json
@dataclass
class Image(_Model):
    created: Optional[datetime]
    format: Optional[str]
    height: Optional[int]
    max_height: Optional[int]
    max_width: Optional[int]
    modified: Optional[datetime]
    width: Optional[int]

    def to_rdf(self, *, graph: Graph) -> Resource:
        resource = _Model.to_rdf(self, graph=graph)
        if self.created is not None:
            resource.add(DCTERMS.created, self.created)
        if self.format is not None:
            resource.add(DCTERMS["format"], self.format)
        if self.height is not None:
            resource.add(EXIF.height, self.height)
        if self.max_height is not None:
            resource.add(CMS.imageMaxHeight, self.max_height)
        if self.max_width is not None:
            resource.add(CMS.imageMaxWidth, self.max_width)
        if self.modified is not None:
            resource.add(DCTERMS.modified, self.modified)
        if self.width is not None:
            resource.add(EXIF.width, self.width)
        return resource
