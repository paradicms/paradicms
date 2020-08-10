from dataclasses import dataclass, field
from typing import List, Optional, Tuple, Union

from dataclasses_json import LetterCase, dataclass_json
from rdflib import Graph, Literal, URIRef
from rdflib.namespace import DCTERMS, FOAF, RDF
from rdflib.resource import Resource

from paradicms_etl._model import _Model
from paradicms_etl.models.object_property import ObjectProperty
from paradicms_etl.models.object_property_definitions import ObjectPropertyDefinitions
from paradicms_etl.models.rights import Rights
from paradicms_etl.namespace import CMS, VRA


@dataclass_json(letter_case=LetterCase.CAMEL)
@dataclass(frozen=True)
class Object(_Model):
    # Linking up to the parent (relational style) and grandparent makes it easier to do
    # page generation and search indexing downstream.
    collection_uris: Tuple[URIRef, ...]
    institution_uri: URIRef
    title: str
    properties: List[ObjectProperty] = field(default_factory=list)
    rights: Optional[Rights] = None

    def to_rdf(self, *, graph: Graph) -> Resource:
        resource = _Model.to_rdf(self, graph=graph)
        resource.add(RDF.type, CMS[self.__class__.__name__])

        for collection_uri in self.collection_uris:
            graph.add((collection_uri, CMS.object, self.uri))
        for property_ in self.properties:
            property_definition = getattr(ObjectPropertyDefinitions, property_.key.upper())
            if isinstance(property_.value, URIRef):
                resource.add(property_definition.uri, property_.value)
            else:
                resource.add(property_definition.uri, Literal(property_.value))
        if self.rights is not None:
            self.rights.to_rdf(add_to_resource=resource)
        resource.add(DCTERMS.title, Literal(self.title))
        return resource
