from logging import Logger
from typing import Dict, Generator, List, NamedTuple, Tuple

from paradicms_etl.namespace import SCHEMA
from rdflib import Graph, Literal, RDF, RDFS, SKOS, URIRef

from paradicms_etl.models.labels import Labels
from paradicms_etl.pipelines.wikidata.wikidata_direct_claim import WikidataDirectClaim
from paradicms_etl.pipelines.wikidata.wikidata_full_statement import (
    WikidataFullStatement,
)
from paradicms_etl.pipelines.wikidata.wikidata_property_definition import (
    WikidataPropertyDefinition,
)
from paradicms_etl.pipelines.wikidata.wikidata_statement import WikidataStatement


class WikidataItem(NamedTuple):
    labels: Labels
    statements: Tuple[WikidataStatement, ...]
    uri: URIRef

    def __eq__(self, other):
        if not isinstance(other, WikidataItem):
            return False
        return self.uri == other.uri

    @classmethod
    def parse(
        cls,
        *,
        graph: Graph,
        logger: Logger,
        property_definitions: Tuple[WikidataPropertyDefinition, ...],
        uri: URIRef,
    ):
        IGNORE_PREDICATES = {SCHEMA.description, SCHEMA.name, RDF.type, RDFS.label}

        alt_labels = []
        pref_label = None

        direct_claims = []
        full_statements = []
        for predicate, object_ in graph.predicate_objects(subject=uri):
            if predicate in IGNORE_PREDICATES:
                logger.debug("item %s: ignoring predicate %s", uri, predicate)
                continue

            if isinstance(object_, Literal) and object_.language != "en":
                logger.debug("item %s: ignoring non-English literal", uri, object_)
                continue

            if predicate == SKOS.altLabel:
                assert isinstance(object_, Literal)
                alt_labels.append(object_.value)
                continue

            if predicate == SKOS.prefLabel:
                assert isinstance(object_, Literal)
                pref_label = object_.value
                continue

            added_property = False
            for property_definition in property_definitions:
                if predicate == property_definition.claim_uri:
                    full_statements.append(
                        WikidataFullStatement.parse(
                            graph=graph,
                            logger=logger,
                            property_definitions=property_definitions,
                            uri=object_,
                        )
                    )
                    added_property = True
                    break
                elif predicate == property_definition.direct_claim_uri:
                    direct_claims.append(
                        WikidataDirectClaim.parse(
                            graph=graph,
                            object_=object_,
                            predicate=predicate,
                            property_definition=property_definition,
                            subject=uri,
                        )
                    )
                    added_property = True
                    break
                elif predicate == property_definition.direct_claim_normalized_uri:
                    # Will be picked up by the direct claim parse above
                    added_property = True
                    break
            if not added_property:
                logger.warning(
                    "item parser: unknown triple (%s, %s, %s)", uri, predicate, object_
                )

        # Direct claims often duplicate full statements
        # Only retain the full statement
        statements = []
        full_statements_by_property_definition = {}
        for full_statement in full_statements:
            full_statements_by_property_definition.setdefault(
                id(full_statement.property_definition), []
            ).append(full_statement)
            # Assume full statements don't duplicate each other
            statements.append(full_statement)
        for direct_claim in direct_claims:
            duplicate = False
            for full_statement in full_statements_by_property_definition.get(
                id(direct_claim.property_definition), []
            ):
                if full_statement.value == direct_claim.value:
                    duplicate = True
                    break
            if duplicate:
                logger.debug(
                    "item %s: direct claim %s has a corresponding full statement, eliding",
                    uri,
                    direct_claim.property_definition.direct_claim_uri,
                )
            else:
                logger.debug(
                    "item %s: direct claim %s has no corresponding full statement",
                    uri,
                    direct_claim.property_definition.direct_claim_uri,
                )
                statements.append(direct_claim)

        assert pref_label is not None

        return cls(
            labels=Labels(
                alt_labels=tuple(alt_labels) if alt_labels else None,
                pref_label=pref_label,
            ),
            statements=tuple(statements),
            uri=uri,
        )

    def statements_by_property_label(self) -> Dict[str, List[WikidataStatement]]:
        result = {}
        for statement in self.statements:
            result.setdefault(statement.property_definition.label, []).append(statement)
        return result
