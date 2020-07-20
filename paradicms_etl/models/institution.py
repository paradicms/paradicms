from dataclasses import dataclass
from typing import List

from dataclasses_json import dataclass_json
from rdflib import Graph, Literal, URIRef
from rdflib.namespace import FOAF
from rdflib.resource import Resource

from paradicms_etl._model import _Model
from .collection import Collection
from ..namespace import CMS


@dataclass_json
@dataclass
class Institution(_Model):
    collections: List[Collection]
    name: str
    owner: URIRef

    def to_rdf(self, *, graph: Graph) -> Resource:
        resource = _Model.to_rdf(self, graph=graph)
        for collection in self.collections:
            resource.add(CMS.collection, collection.uri)
        resource.add(FOAF.name, Literal(self.name))
        resource.add(CMS.owner, self.owner)
        return resource

    def validate(self):
        for collection in self.collections:
            collection.validate()
