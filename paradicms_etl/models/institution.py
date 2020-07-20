from dataclasses import dataclass, field
from typing import List, Optional

from dataclasses_json import dataclass_json
from rdflib import Graph, Literal, URIRef
from rdflib.namespace import FOAF, RDF
from rdflib.resource import Resource

from paradicms_etl._model import _Model
from .collection import Collection
from .rights import Rights
from ..namespace import CMS


@dataclass_json
@dataclass
class Institution(_Model):
    name: str
    owner: URIRef
    collections: List[Collection] = field(default_factory=list)
    rights: Optional[Rights] = None

    def to_rdf(self, *, graph: Graph) -> Resource:
        resource = _Model.to_rdf(self, graph=graph)
        resource.add(RDF.type, CMS[self.__class__.__name__])
        for collection in self.collections:
            resource.add(CMS.collection, collection.uri)
        resource.add(FOAF.name, Literal(self.name))
        resource.add(CMS.owner, self.owner)
        if self.rights is not None:
            self.rights.to_rdf(add_to_resource=resource)
        return resource

    def validate(self):
        for collection in self.collections:
            collection.validate()
