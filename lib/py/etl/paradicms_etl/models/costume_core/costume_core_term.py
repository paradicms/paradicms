from dataclasses import dataclass
from typing import Optional, Tuple
from urllib.parse import quote

from paradicms_etl.models.named_model import NamedModel
from rdflib import BNode, Graph, Literal, RDF, RDFS, URIRef
from rdflib.namespace import DCTERMS, OWL
from rdflib.resource import Resource

from dressdiscover_etl.models.costume_core_description import CostumeCoreDescription
from dressdiscover_etl.models.costume_core_rights import CostumeCoreRights


@dataclass(frozen=True)
class CostumeCoreTerm(NamedModel):
    FULL_SIZE_IMAGE_BASE_URL = (
        "https://worksheet.dressdiscover.org/img/worksheet/full_size/"
    )
    THUMBNAIL_BASE_URL = "https://worksheet.dressdiscover.org/img/worksheet/thumbnail/"

    display_name_en: str
    id: str
    _uri: URIRef
    aat_id: Optional[str] = None
    description: Optional[CostumeCoreDescription] = None
    features: Optional[Tuple[str, ...]] = None
    image_filename: Optional[str] = None
    image_rights: Optional[CostumeCoreRights] = None
    wikidata_id: Optional[str] = None

    @classmethod
    def from_rdf(cls, resource: Resource):
        raise NotImplementedError

    @property
    def full_size_image_url(self) -> Optional[str]:
        return (
            self.FULL_SIZE_IMAGE_BASE_URL + quote(self.image_filename)
            if self.image_filename
            else None
        )

    @property
    def label(self):
        return self.display_name_en

    @property
    def thumbnail_url(self) -> Optional[str]:
        return (
            self.THUMBNAIL_BASE_URL + quote(self.image_filename)
            if self.image_filename
            else None
        )

    def to_rdf(self, graph: Graph) -> Resource:
        resource = graph.resource(URIRef(self.uri))
        resource.add(RDFS.label, Literal(self.label, lang="en"))
        resource.add(DCTERMS.identifier, Literal(self.id))
        resource.add(RDF.type, OWL.NamedIndividual)
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
            source_resource = graph.resource(URIRef(self.description.rights.source_url))
            # source_resource.add(RDFS.label, Literal(self.description.rights.source_name))
            description_resource.add(DCTERMS.source, source_resource)
            if self.description.rights.license_uri:
                description_resource.add(
                    DCTERMS.license, URIRef(self.description.rights.license_uri)
                )
            if self.description.rights.rights_statement_uri:
                description_resource.add(
                    DCTERMS.rights, URIRef(self.description.rights.rights_statement_uri)
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
