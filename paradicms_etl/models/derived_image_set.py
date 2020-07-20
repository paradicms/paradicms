from dataclasses import dataclass, field
from typing import List

from dataclasses_json import dataclass_json
from rdflib import Graph
from rdflib.namespace import FOAF
from rdflib.resource import Resource

from paradicms_etl.models.image import Image


@dataclass_json
@dataclass
class DerivedImageSet:
    original: Image
    derived: List[Image] = field(default_factory=list)

    def to_rdf(self, *, graph: Graph) -> Resource:
        resource = self.original.to_rdf(graph=graph)
        for derived in self.derived:
            resource.add(FOAF.thumbnail, derived.to_rdf(graph=graph))
        return resource
