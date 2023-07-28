from typing import Optional

from rdflib import RDFS, URIRef

from paradicms_etl.models.resource_backed_model import ResourceBackedModel
from paradicms_etl.namespaces import WIKIBASE


class WikibasePropertyDefinition(ResourceBackedModel):
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
    def claim(self) -> Optional[URIRef]:
        self._optional_value(WIKIBASE.claim, self._map_uri_value)

    @property
    def direct_claim(self) -> Optional[URIRef]:
        self._optional_value(WIKIBASE.directClaim, self._map_uri_value)

    @property
    def direct_claim_normalized(self) -> Optional[URIRef]:
        self._optional_value(WIKIBASE.directClaimNormalized, self._map_uri_value)

    @property
    def label(self):
        return self._required_value(RDFS.label, self._map_str_value)

    @property
    def qualifier(self) -> Optional[URIRef]:
        self._optional_value(WIKIBASE.qualifier, self._map_uri_value)

    @property
    def qualifier_value(self) -> Optional[URIRef]:
        self._optional_value(WIKIBASE.qualifierValue, self._map_uri_value)

    @property
    def qualifier_value_normalized(self) -> Optional[URIRef]:
        self._optional_value(WIKIBASE.qualifierValueNormalized, self._map_uri_value)

    @property
    def statement_property(self) -> Optional[URIRef]:
        self._optional_value(WIKIBASE.statementProperty, self._map_uri_value)

    @property
    def statement_value(self) -> Optional[URIRef]:
        self._optional_value(WIKIBASE.statementValue, self._map_uri_value)

    @property
    def statement_value_normalized(self) -> Optional[URIRef]:
        self._optional_value(WIKIBASE.statementValueNormalized, self._map_uri_value)
