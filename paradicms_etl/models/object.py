from dataclasses import dataclass, field
from typing import List, Optional, Tuple, Union

from dataclasses_json import dataclass_json
from rdflib import Graph, Literal, URIRef
from rdflib.namespace import DCTERMS, FOAF, RDF
from rdflib.resource import Resource

from paradicms_etl._model import _Model
from paradicms_etl.models.rights import Rights
from paradicms_etl.namespace import CMS, VRA


@dataclass_json
@dataclass
class Object(_Model):
    # Linking up to the parent (relational style) and grandparent makes it easier to do
    # page generation and search indexing downstream.
    collection_uris: Tuple[URIRef, ...]
    institution_uri: URIRef
    title: str
    alternative_titles: List[str] = field(default_factory=list)
    creators: List[Union[URIRef, str]] = field(default_factory=list)
    cultural_contexts: List[Union[URIRef, str]] = field(default_factory=list)
    dates: List[Union[URIRef, str]] = field(default_factory=list)
    descriptions: List[str] = field(default_factory=list)
    extents: List[Union[URIRef, str]] = field(default_factory=list)
    identifiers: List[Union[URIRef, str]] = field(default_factory=list)
    languages: List[Union[URIRef, str]] = field(default_factory=list)
    materials: List[Union[URIRef, str]] = field(default_factory=list)
    media: List[Union[URIRef, str]] = field(default_factory=list)
    provenances: List[str] = field(default_factory=list)
    publishers: List[Union[URIRef, str]] = field(default_factory=list)
    rights: Optional[Rights] = None
    sources: List[Union[URIRef, str]] = field(default_factory=list)
    spatials: List[Union[URIRef, str]] = field(default_factory=list)
    subjects: List[Union[URIRef, str]] = field(default_factory=list)
    techniques: List[Union[URIRef, str]] = field(default_factory=list)
    temporals: List[Union[URIRef, str]] = field(default_factory=list)
    types: List[Union[URIRef, str]] = field(default_factory=list)

    def to_rdf(self, *, graph: Graph) -> Resource:
        resource = _Model.to_rdf(self, graph=graph)
        resource.add(RDF.type, CMS[self.__class__.__name__])

        def add_literal_or_uri(property, literal_or_uri: Union[URIRef, str]):
            if isinstance(literal_or_uri, URIRef):
                resource.add(property, literal_or_uri)
            elif isinstance(literal_or_uri, str):
                resource.add(property, Literal(literal_or_uri))
            else:
                raise NotImplementedError(type(literal_or_uri))

        def add_literals_or_uris(property, literals_or_uris: List[Union[URIRef, str]]):
            for literal_or_uri in literals_or_uris:
                add_literal_or_uri(property, literal_or_uri)

        def add_literals(property, literals: List[str]):
            for literal in literals:
                resource.add(property, Literal(literal))

        add_literals(DCTERMS.alternative, self.alternative_titles)
        add_literals_or_uris(DCTERMS.creator, self.creators)
        add_literals_or_uris(VRA.culturalContext, self.cultural_contexts)
        for collection_uri in self.collection_uris:
            graph.add((collection_uri, CMS.object, self.uri))
        add_literals(DCTERMS.date, self.dates)
        add_literals(DCTERMS.description, self.descriptions)
        add_literals_or_uris(DCTERMS.extent, self.extents)
        add_literals_or_uris(DCTERMS.identifier, self.identifiers)
        add_literals_or_uris(DCTERMS.language, self.languages)
        add_literals_or_uris(VRA.material, self.materials)
        add_literals_or_uris(DCTERMS.medium, self.media)
        add_literals_or_uris(DCTERMS.provenance, self.provenances)
        add_literals_or_uris(DCTERMS.publisher, self.publishers)
        if self.rights is not None:
            self.rights.to_rdf(add_to_resource=resource)
        add_literals_or_uris(DCTERMS.source, self.sources)
        add_literals_or_uris(DCTERMS.spatial, self.spatials)
        add_literals_or_uris(DCTERMS.subject, self.subjects)
        add_literals_or_uris(VRA.hasTechnique, self.techniques)
        add_literals_or_uris(DCTERMS.temporal, self.temporals)
        resource.add(DCTERMS.title, Literal(self.title))
        add_literals_or_uris(DCTERMS.type, self.types)
        return resource
