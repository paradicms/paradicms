from dataclasses import dataclass
from typing import Optional, Tuple

from rdflib import Graph, Literal, URIRef
from rdflib.namespace import DCTERMS
from rdflib.resource import Resource

from paradicms_etl.models._named_model import _NamedModel
from paradicms_etl.models.property import Property
from paradicms_etl.models.property_definition import PropertyDefinition
from paradicms_etl.namespace import CMS
from paradicms_etl.utils.properties_to_rdf import properties_to_rdf


@dataclass(frozen=True)
class Collection(_NamedModel):
    # Linking up to the parent (relational style )instead of down to child objects
    # makes it easier to do page generation and search indexing downstream.
    institution_uri: URIRef
    title: str
    abstract: Optional[str] = None
    properties: Tuple[Property, ...] = ()

    def to_rdf(
        self, *, graph: Graph, property_definitions: Tuple[PropertyDefinition, ...]
    ) -> Resource:
        resource = _NamedModel.to_rdf(
            self, graph=graph, property_definitions=property_definitions
        )
        resource.add(CMS.institution, self.institution_uri)
        properties_to_rdf(
            properties=self.properties,
            property_definitions=property_definitions,
            resource=resource,
        )
        resource.add(DCTERMS.title, Literal(self.title))
        return resource
