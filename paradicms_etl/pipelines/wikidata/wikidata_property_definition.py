from typing import NamedTuple, Optional

from rdflib import Graph, Literal, RDFS, URIRef

from paradicms_etl.pipelines.wikidata.wikidata_namespace import WIKIBASE


class WikidataPropertyDefinition(NamedTuple):
    entity_uri: URIRef
    label: str
    claim_uri: Optional[URIRef] = None
    direct_claim_normalized_uri: Optional[URIRef] = None
    direct_claim_uri: Optional[URIRef] = None
    qualifier_uri: Optional[URIRef] = None
    qualifier_value_uri: Optional[URIRef] = None
    qualifier_value_normalized_uri: Optional[URIRef] = None
    statement_property_uri: Optional[URIRef] = None
    statement_value_normalized_uri: Optional[URIRef] = None
    statement_value_uri: Optional[URIRef] = None

    @classmethod
    def parse(cls, *, entity_uri: URIRef, graph: Graph):
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

        kwds = {"entity_uri": entity_uri}

        def get_property_uri(predicate: URIRef) -> Optional[None]:
            for object_ in graph.objects(subject=entity_uri, predicate=predicate):
                assert isinstance(object_, URIRef)
                return object_
            return None

        kwds["claim_uri"] = get_property_uri(WIKIBASE.claim)
        kwds["direct_claim_uri"] = get_property_uri(WIKIBASE.directClaim)
        kwds["direct_claim_normalized_uri"] = get_property_uri(
            WIKIBASE.directClaimNormalized
        )
        kwds["qualifier_uri"] = get_property_uri(WIKIBASE.qualifier)
        kwds["qualifier_value_uri"] = get_property_uri(WIKIBASE.qualifierValue)
        kwds["qualifier_value_normalized_uri"] = get_property_uri(
            WIKIBASE.qualifierValueNormalized
        )
        kwds["statement_property_uri"] = get_property_uri(WIKIBASE.statementProperty)
        kwds["statement_value_uri"] = get_property_uri(WIKIBASE.statementValue)
        kwds["statement_value_normalized_uri"] = get_property_uri(
            WIKIBASE.statementValueNormalized
        )

        labels = tuple(
            label_object.value
            for label_object in graph.objects(subject=entity_uri, predicate=RDFS.label)
            if isinstance(label_object, Literal) and label_object.language == "en"
        )
        assert labels
        kwds["label"] = labels[0]

        return cls(**kwds)
