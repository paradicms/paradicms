from dataclasses import dataclass, field
from typing import List, Optional

from dataclasses_json import LetterCase, dataclass_json
from rdflib import Graph, Literal, URIRef
from rdflib.namespace import DCTERMS, RDF
from rdflib.resource import Resource

from paradicms_etl._model import _Model
from .rights import Rights
from ..namespace import CMS


@dataclass_json(letter_case=LetterCase.CAMEL)
@dataclass
class Collection(_Model):
    # Linking up to the parent (relational style )instead of down to child objects
    # makes it easier to do page generation and search indexing downstream.
    institution_uri: URIRef
    title: str
    rights: Optional[Rights] = None

    def to_rdf(self, *, graph: Graph) -> Resource:
        resource = _Model.to_rdf(self, graph=graph)
        resource.add(RDF.type, CMS[self.__class__.__name__])
        graph.add((self.institution_uri, CMS.collection, self.uri))
        if self.rights is not None:
            self.rights.to_rdf(add_to_resource=resource)
        resource.add(DCTERMS.title, Literal(self.title))
        return resource

    def validate(self):
        for object_ in self.objects:
            object_.validate()
