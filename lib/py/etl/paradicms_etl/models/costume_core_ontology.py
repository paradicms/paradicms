from dataclasses import dataclass
from typing import Optional, Tuple

from rdflib import Literal, OWL, URIRef, Graph, BNode
from rdflib.collection import Collection
from rdflib.namespace import DCTERMS, RDF, RDFS
from rdflib.resource import Resource

from paradicms_etl.models.named_model import NamedModel
from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.namespaces import COCO


class CostumeCoreOntology(ResourceBackedNamedModel):
    @dataclass(frozen=True)
    class Rights:
        author: str
        license_uri: Optional[str]
        rights_statement_uri: Optional[str]
        source_name: str
        source_url: str

    @dataclass(frozen=True)
    class Description:
        rights: "CostumeCoreOntology.Rights"
        text_en: str

    @dataclass(frozen=True)
    class Term(NamedModel):
        display_name_en: str
        id: str
        _uri: URIRef
        aat_id: Optional[str] = None
        description: Optional["CostumeCoreOntology.Description"] = None
        features: Optional[Tuple[str, ...]] = None
        wikidata_id: Optional[str] = None

        @classmethod
        def from_rdf(cls, resource: Resource):
            raise NotImplementedError

        @property
        def label(self):
            return self.display_name_en

        @classmethod
        def rdf_type_uri(cls):
            return OWL.NamedIndividual

        def to_rdf(self, graph: Graph) -> Resource:
            resource = graph.resource(URIRef(self.uri))
            resource.add(RDFS.label, Literal(self.label, lang="en"))
            resource.add(DCTERMS.identifier, Literal(self.id))
            resource.add(RDF.type, self.rdf_type_uri())
            if self.description:
                resource.add(
                    DCTERMS.description, Literal(self.description.text_en, lang="en")
                )
                description_resource = graph.resource(BNode())
                resource.add(DCTERMS.description, description_resource)
                description_resource.add(
                    RDFS.label, Literal(self.description.text_en, lang="en")
                )
                description_resource.add(
                    DCTERMS.creator, Literal(self.description.rights.author)
                )
                if self.description.rights.source_url:
                    source_resource = graph.resource(
                        URIRef(self.description.rights.source_url)
                    )
                    # source_resource.add(RDFS.label, Literal(self.description.rights.source_name))
                    description_resource.add(DCTERMS.source, source_resource)
                if self.description.rights.license_uri:
                    description_resource.add(
                        DCTERMS.license, URIRef(self.description.rights.license_uri)
                    )
                if self.description.rights.rights_statement_uri:
                    description_resource.add(
                        DCTERMS.rights,
                        URIRef(self.description.rights.rights_statement_uri),
                    )
            same_as_uris = []
            if self.aat_id:
                same_as_uris.append(URIRef("http://vocab.getty.edu/aat/" + self.aat_id))
            if self.wikidata_id:
                same_as_uris.append(
                    URIRef("http://www.wikidata.org/entity/" + self.wikidata_id)
                )
            for same_as_uri in same_as_uris:
                resource.add(OWL.sameAs, same_as_uri)
                graph.add((same_as_uri, OWL.sameAs, resource.identifier))
                graph.add((same_as_uri, RDF.type, OWL.NamedIndividual))
            return resource

        @property
        def uri(self) -> URIRef:
            return self._uri

    @dataclass(frozen=True)
    class Predicate(NamedModel):
        description_text_en: str
        display_name_en: str
        id: str
        _uri: URIRef
        sub_property_of_uri: Optional[str] = None
        terms: Optional[Tuple["CostumeCoreOntology.Term", ...]] = None

        @classmethod
        def from_rdf(cls, resource: Resource):
            raise NotImplementedError

        @property
        def label(self):
            return self.display_name_en

        @classmethod
        def rdf_type_uri(cls):
            return OWL.ObjectProperty

        def to_rdf(self, graph: Graph) -> Resource:
            assert self.terms is not None
            resource = graph.resource(URIRef(self.uri))
            resource.add(RDF.type, OWL.ObjectProperty)
            resource.add(RDFS.comment, Literal(self.description_text_en, lang="en"))
            resource.add(RDFS.label, Literal(self.label, lang="en"))
            resource.add(DCTERMS.identifier, Literal(self.id))
            if self.sub_property_of_uri:
                resource.add(RDFS.subPropertyOf, URIRef(self.sub_property_of_uri))
            if self.terms:
                range_class_resource = graph.resource(BNode())
                range_class_resource.add(RDF.type, OWL.Class)
                range_individuals_collection = Collection(graph, BNode())
                for predicate_term in self.terms:
                    range_individuals_collection.append(URIRef(predicate_term.uri))
                range_class_resource.add(OWL.oneOf, range_individuals_collection.uri)
                resource.add(RDFS.range, range_class_resource)
            return resource

        @property
        def uri(self):
            return self._uri

    class Builder(ResourceBackedNamedModel.Builder):
        def __init__(self):
            ResourceBackedNamedModel.Builder.__init__(
                self, Graph().resource(URIRef(str(COCO)[:-1]))
            )
            self.add(DCTERMS.title, Literal("Costume Core Ontology"))
            self.add(DCTERMS.creator, Literal("Arden Kirkland"))
            self.add(DCTERMS.contributor, Literal("Minor Gordon"))
            self.add(
                DCTERMS.rights,
                Literal(
                    "This ontology is distributed under a Creative Commons BY SA 4.0 license  - https://creativecommons.org/licenses/by-sa/4.0/"
                ),
            )
            self.add(
                RDFS.comment,
                Literal(
                    "The Costume Core ontology is for describing artifacts of historic clothing, and is meant to build upon VRA Core and Dublin Core. Work to develop this ontology was part of the Costume Core Toolkit project, funded by a Visual Resources Association Foundation Project Grant in 2019-2020. More information is at http://ardenkirkland.com/costumecore"
                ),
            )

            # Annotation properties
            for annotation_property_local in (
                "creator",
                "description",
                "identifier",
                "license",
                "rights",
                "source",
            ):
                self._resource.graph.add(
                    (
                        DCTERMS[annotation_property_local],
                        RDF.type,
                        OWL.AnnotationProperty,
                    )
                )

        def build(self) -> "CostumeCoreOntology":
            return CostumeCoreOntology(self._resource)

        def set_version(self, version: str) -> "CostumeCoreOntology.Builder":
            self.add(OWL.versionIRI, COCO[version])
            self.add(OWL.versionInfo, Literal(version))
            return self

    @classmethod
    def builder(cls):
        return cls.Builder()

    @classmethod
    def label_property_uri(cls) -> Optional[URIRef]:
        raise NotImplementedError

    @classmethod
    def rdf_type_uri(cls):
        return OWL.Ontology
