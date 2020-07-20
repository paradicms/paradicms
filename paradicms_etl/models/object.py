from dataclasses import dataclass
from typing import Optional

from dataclasses_json import dataclass_json
from rdflib import Graph, Literal, URIRef
from rdflib.namespace import DCTERMS
from rdflib.resource import Resource

from paradicms_etl._model import _Model
from paradicms_etl.namespace import CMS


@dataclass_json
@dataclass
class Object(_Model):
    title: str
    owner: Optional[URIRef]

    def to_rdf(self, *, graph: Graph) -> Resource:
        resource = _Model.__init__(self, graph=graph)
        if self.owner is not None:
            resource.add(CMS.owner, self.owner)
        else:
            resource.add(CMS.owner, CMS.inherit)
        resource.add(DCTERMS.title, Literal(self.title))
        return resource
