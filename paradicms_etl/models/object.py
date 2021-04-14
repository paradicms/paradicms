from dataclasses import dataclass
from typing import Optional, Tuple

from rdflib import Graph, Literal, URIRef
from rdflib.namespace import DCTERMS, RDF
from rdflib.resource import Resource
from rdflib.term import Node

from paradicms_etl.models._named_model import _NamedModel
from paradicms_etl.models.property import Property
from paradicms_etl.models.property_definition import PropertyDefinition
from paradicms_etl.models.rights import Rights
from paradicms_etl.namespace import CMS
from paradicms_etl.utils.rdf_resource_wrapper import RdfResourceWrapper


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

    @classmethod
    def from_rdf(
        cls,
        resource: Resource,
        *,
        collection_uris: Tuple[URIRef, ...] = (),
        institution_uri: Optional[URIRef] = None,
    ):
        resource_wrapper = RdfResourceWrapper(resource)

        if not collection_uris:
            collection_uris = tuple(
                collection_resource.identifier
                for collection_resource in resource.objects(CMS.collection)
                if isinstance(collection_resource, Resource)
            )

        if institution_uri is None:
            institution_uri = resource.value(CMS.institution)
            if not isinstance(institution_uri, URIRef):
                raise ValueError(
                    f"object {resource.identifier} has no institution statement"
                )

        title = resource_wrapper.str_value(DCTERMS.title)
        if title is None:
            raise ValueError("object requires a literal string dcterms:title")

        properties = []
        for p, o in resource.predicate_objects():
            if isinstance(o, Node):
                value = o
            elif isinstance(o, Resource):
                value = o.identifier
            else:
                raise TypeError(type(o))
            properties.append(Property(p.identifier, value))
        properties = tuple(properties)

        return Object(
            abstract=resource_wrapper.str_value(DCTERMS.abstract),
            collection_uris=collection_uris,
            institution_uri=institution_uri,
            properties=properties,
            rights=Rights.from_properties(properties),
            title=title,
            uri=resource.identifier,
        )

    def to_rdf(
        self, *, graph: Graph, property_definitions: Tuple[PropertyDefinition, ...]
    ) -> Resource:
        resource = _NamedModel.to_rdf(
            self, graph=graph, property_definitions=property_definitions
        )
        for collection_uri in self.collection_uris:
            resource.add(CMS.collection, collection_uri)
        resource.add(CMS.institution, self.institution_uri)
        for property_ in self.properties:
            resource.add(property_.uri, property_.value)
        if self.rights is not None:
            self.rights.to_rdf(add_to_resource=resource)
        resource.add(DCTERMS.title, Literal(self.title))
        return resource
