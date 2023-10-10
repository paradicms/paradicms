from rdflib import RDFS, Graph, URIRef
from rdflib.resource import Resource

from paradicms_etl.models.resource_backed_model import ResourceBackedModel
from paradicms_etl.namespaces import WIKIBASE


class WikibaseProperty(ResourceBackedModel):
    # wd:P244 a wikibase:Property,
    # wikibase:Property ;
    # wikibase:propertyType <http://wikiba.se/ontology#ExternalId> ;
    # wikibase:directClaim wdt:P244 ;
    # wikibase:claim p:P244 ;
    # wikibase:statementProperty ps:P244 ;
    # wikibase:statementValue psv:P244 ;
    # wikibase:qualifier pq:P244 ;
    # wikibase:qualifierValue pqv:P244 ;
    # wikibase:reference pr:P244 ;
    # wikibase:referenceValue prv:P244 ;
    # wikibase:novalue wdno:P244 ;
    # wikibase:directClaimNormalized wdtn:P244 ;
    # wikibase:statementValueNormalized psn:P244 ;
    # wikibase:qualifierValueNormalized pqn:P244 ;
    # wikibase:referenceValueNormalized prn:P244 .

    @property
    def claim_uri(self) -> URIRef | None:
        return self._optional_value(WIKIBASE.claim, self._map_term_to_uri)

    @property
    def direct_claim_uri(self) -> URIRef | None:
        return self._optional_value(WIKIBASE.directClaim, self._map_term_to_uri)

    @property
    def direct_claim_normalized_uri(self) -> URIRef | None:
        return self._optional_value(
            WIKIBASE.directClaimNormalized, self._map_term_to_uri
        )

    @classmethod
    def from_rdf(cls, resource: Resource) -> "WikibaseProperty":
        """
        Parse the minimal subset of the given resource's graph needed to represent a single WikibaseProperty.
        """

        isolated_graph = Graph()
        for p, o in resource.graph.predicate_objects(subject=resource.identifier):
            isolated_graph.add((resource.identifier, p, o))
        return cls(isolated_graph.resource(resource.identifier))

    @property
    def label(self) -> str:
        return self._required_label

    @classmethod
    def label_property_uri(cls) -> URIRef:
        return RDFS.label

    @property
    def qualifier_uri(self) -> URIRef | None:
        return self._optional_value(WIKIBASE.qualifier, self._map_term_to_uri)

    @property
    def qualifier_value_uri(self) -> URIRef | None:
        return self._optional_value(WIKIBASE.qualifierValue, self._map_term_to_uri)

    @property
    def qualifier_value_normalized_uri(self) -> URIRef | None:
        return self._optional_value(
            WIKIBASE.qualifierValueNormalized, self._map_term_to_uri
        )

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return WIKIBASE.Property

    @property
    def statement_property_uri(self) -> URIRef | None:
        return self._optional_value(WIKIBASE.statementProperty, self._map_term_to_uri)

    @property
    def statement_value_uri(self) -> URIRef | None:
        return self._optional_value(WIKIBASE.statementValue, self._map_term_to_uri)

    @property
    def statement_value_normalized_uri(self) -> URIRef | None:
        return self._optional_value(
            WIKIBASE.statementValueNormalized, self._map_term_to_uri
        )
