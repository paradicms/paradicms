from dataclasses import dataclass
from typing import List, Optional

from dataclasses_json import dataclass_json
from rdflib import Graph, Literal, URIRef
from rdflib.namespace import DCTERMS, RDF
from rdflib.resource import Resource

from paradicms_etl._model import _Model
from .object import Object
from ..namespace import CMS


@dataclass_json
@dataclass
class Collection(_Model):
    objects: List[Object]
    title: str
    owner: Optional[URIRef]

    def to_rdf(self, *, graph: Graph) -> Resource:
        resource = _Model.to_rdf(self, graph=graph)
        resource.add(RDF.type, CMS[self.__class__.__name__])
        for object_ in self.objects:
            resource.add(CMS.object, object_.uri)
        if self.owner is not None:
            resource.add(CMS.owner, self.owner)
        else:
            resource.add(CMS.owner, CMS.inherit)
        resource.add(DCTERMS.title, Literal(self.title))
        return resource

    def validate(self):
        for object_ in self.objects:
            object_.validate()
