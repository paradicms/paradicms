from dataclasses import dataclass, field
from typing import List, Optional

from dataclasses_json import dataclass_json
from rdflib import Graph, Literal, URIRef
from rdflib.namespace import DCTERMS, FOAF, RDF
from rdflib.resource import Resource

from paradicms_etl._model import _Model
from paradicms_etl.models.derived_image_set import DerivedImageSet
from paradicms_etl.models.rights import Rights
from paradicms_etl.namespace import CMS


@dataclass_json
@dataclass
class Object(_Model):
    title: str
    descriptions: List[str] = field(default_factory=list)
    owner: Optional[URIRef] = None
    images: List[DerivedImageSet] = field(default_factory=list)
    rights: Optional[Rights] = None
    subjects: List[str] = field(default_factory=list)

    def to_rdf(self, *, graph: Graph) -> Resource:
        resource = _Model.to_rdf(self, graph=graph)
        resource.add(RDF.type, CMS[self.__class__.__name__])
        for description in self.descriptions:
            resource.add(DCTERMS.description, Literal(description))
        for image in self.images:
            resource.add(FOAF.depiction, image.to_rdf(graph=graph))
        if self.owner is not None:
            resource.add(CMS.owner, self.owner)
        else:
            resource.add(CMS.owner, CMS.inherit)
        if self.rights is not None:
            self.rights.to_rdf(add_to_resource=resource)
        for subject in self.subjects:
            resource.add(DCTERMS.subject, Literal(subject))
        resource.add(DCTERMS.title, Literal(self.title))
        return resource
