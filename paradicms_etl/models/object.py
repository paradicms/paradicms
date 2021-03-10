from dataclasses import dataclass
from typing import Optional, Tuple

from dataclasses_json import LetterCase, dataclass_json
from rdflib import Graph, Literal, URIRef
from rdflib.namespace import DCTERMS, RDF
from rdflib.resource import Resource

from paradicms_etl.models._named_model import _NamedModel
from paradicms_etl.models.property import Property
from paradicms_etl.models.property_definition import PropertyDefinition
from paradicms_etl.models.rights import Rights
from paradicms_etl.namespace import CMS
from paradicms_etl.utils.rdf_utils import properties_to_rdf


@dataclass_json(letter_case=LetterCase.CAMEL)
@dataclass(frozen=True)
class Object(_NamedModel):
    # Linking up to the parent (relational style) and grandparent makes it easier to do
    # page generation and search indexing downstream.
    collection_uris: Tuple[URIRef, ...]
    institution_uri: URIRef
    title: str
    abstract: Optional[str] = None
    properties: Tuple[Property, ...] = ()
    rights: Optional[Rights] = None

    def to_rdf(
        self, *, graph: Graph, property_definitions: Tuple[PropertyDefinition, ...]
    ) -> Resource:
        resource = _NamedModel.to_rdf(
            self, graph=graph, property_definitions=property_definitions
        )
        for collection_uri in self.collection_uris:
            resource.add(CMS.collection, collection_uri)
        resource.add(CMS.institution, self.institution_uri)
        properties_to_rdf(
            properties=self.properties,
            property_definitions=property_definitions,
            resource=resource,
        )
        if self.rights is not None:
            self.rights.to_rdf(add_to_resource=resource)
        resource.add(DCTERMS.title, Literal(self.title))
        return resource
