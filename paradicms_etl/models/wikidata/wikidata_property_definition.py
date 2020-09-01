from typing import NamedTuple, Optional, Tuple

from rdflib import Graph, Literal, RDF, RDFS, URIRef

from paradicms_etl.models.wikidata.wikidata_namespace import WIKIBASE


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
    def from_rdf(cls, *, graph: Graph) -> Tuple:
        """
        Return property definitions from the graph and return a tuple of them.
        """

        property_definitions = []
        property_definition_labels = set()
        for property_subject in graph.subjects(
            predicate=RDF.type, object=WIKIBASE.Property
        ):
            property_definition = cls.__from_rdf(
                graph=graph, entity_uri=property_subject
            )
            assert property_definition.label not in property_definition_labels
            property_definitions.append(property_definition)
            property_definition_labels.add(property_definition.label)
        return tuple(property_definitions)

    @classmethod
    def __from_rdf(cls, *, entity_uri: URIRef, graph: Graph):
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
