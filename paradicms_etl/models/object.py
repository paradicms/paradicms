from dataclasses import dataclass, field
from typing import List, Optional, Tuple

from dataclasses_json import dataclass_json
from rdflib import Graph, Literal, URIRef
from rdflib.namespace import DCTERMS, FOAF, RDF
from rdflib.resource import Resource

from paradicms_etl._model import _Model
from paradicms_etl.models.rights import Rights
from paradicms_etl.namespace import CMS


@dataclass_json
@dataclass
class Object(_Model):
    # Linking up to the parent (relational style) and grandparent makes it easier to do
    # page generation and search indexing downstream.
    collection_uris: Tuple[URIRef, ...]
    institution_uri: URIRef
    title: str
    descriptions: List[str] = field(default_factory=list)
    image_uris: List[URIRef] = field(default_factory=list)
    rights: Optional[Rights] = None
    subjects: List[str] = field(default_factory=list)

    def to_rdf(self, *, graph: Graph) -> Resource:
        resource = _Model.to_rdf(self, graph=graph)
        resource.add(RDF.type, CMS[self.__class__.__name__])
        for collection_uri in self.collection_uris:
            graph.add((collection_uri, CMS.object, self.uri))
        for description in self.descriptions:
            resource.add(DCTERMS.description, Literal(description))
        for image_uri in self.image_uris:
            resource.add(FOAF.depiction, image_uri)
        if self.rights is not None:
            self.rights.to_rdf(add_to_resource=resource)
        for subject in self.subjects:
            resource.add(DCTERMS.subject, Literal(subject))
        resource.add(DCTERMS.title, Literal(self.title))
        return resource
