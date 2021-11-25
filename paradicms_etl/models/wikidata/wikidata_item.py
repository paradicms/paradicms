from logging import Logger
from typing import Dict, List, Optional, Tuple

from rdflib import Graph, Literal, RDF, RDFS, SKOS
from rdflib.resource import Resource

from paradicms_etl.models._named_model import _NamedModel
from paradicms_etl.models.wikidata.wikidata_direct_claim import WikidataDirectClaim
from paradicms_etl.models.wikidata.wikidata_full_statement import WikidataFullStatement
from paradicms_etl.models.wikidata.wikidata_item_labels import WikidataItemLabels
from paradicms_etl.models.wikidata.wikidata_namespace import WIKIBASE
from paradicms_etl.models.wikidata.wikidata_property_definition import (
    WikidataPropertyDefinition,
)
from paradicms_etl.models.wikidata.wikidata_statement import WikidataStatement
from paradicms_etl.namespace import SCHEMA


class WikidataItem(_NamedModel):
    def __init__(
        self,
        *,
        description: Optional[str],
        labels: WikidataItemLabels,
        statements: Tuple[WikidataStatement, ...],
        resource: Resource,
    ):
        _NamedModel.__init__(self, resource=resource)
        self.__description = description
        self.__labels = labels
        self.__statements = statements

    def __eq__(self, other):
        if not isinstance(other, WikidataItem):
            return False
        return self.uri == other.uri

    @property
    def description(self) -> Optional[str]:
        return self.__description

    @classmethod
    def from_rdf(
        cls,
        *,
        graph: Graph,
        logger: Logger,
        property_definitions: Optional[Tuple[WikidataPropertyDefinition, ...]] = None,
    ) -> Tuple["WikidataItem", ...]:
        """
        Read all items from the graph and return a tuple of them.
        """

        if property_definitions is None:
            property_definitions = WikidataPropertyDefinition.from_rdf(graph=graph)

        items = []
        for item_subject in graph.subjects(predicate=RDF.type, object=WIKIBASE.Item):
            item = cls.__from_rdf(
                logger=logger,
                property_definitions=property_definitions,
                resource=graph.resource(item_subject),
            )
            if item is not None:
                items.append(item)

        # Make another pass on items, substituting a WikidataItem instance for an (internal) URIRef to it
        items_by_uri = {item.uri: item for item in items}

        for item in items:
            for statement in item.statements:
                try:
                    statement.normalized_value = items_by_uri[
                        statement.normalized_value
                    ]
                except KeyError:
                    pass

                try:
                    statement.value = items_by_uri[statement.value]
                except KeyError:
                    pass

                for qualifier in statement.qualifiers:
                    try:
                        qualifier.normalized_value = items_by_uri[
                            qualifier.normalized_value
                        ]
                    except KeyError:
                        pass

                    try:
                        qualifier.value = items_by_uri[qualifier.value]
                    except KeyError:
                        pass

        # for item in items:
        #     if item.uri not in accounted_for_item_uris:
        #         print("Unaccounted item URI", item.uri)

        return tuple(items)

    @classmethod
    def __from_rdf(
        cls,
        *,
        logger: Logger,
        property_definitions: Tuple[WikidataPropertyDefinition, ...],
        resource: Resource,
    ):
        """
        Read the item corresponding to the given URI.
        """

        IGNORE_PREDICATES = {SCHEMA.description, SCHEMA.name, RDF.type, RDFS.label}

        alt_labels = []
        description = None
        pref_label = None

        direct_claims = []
        full_statements = []
        for predicate, object_ in resource.graph.predicate_objects(
            subject=resource.identifier
        ):
            if predicate in IGNORE_PREDICATES:
                logger.debug(
                    "item %s: ignoring predicate %s", resource.identifier, predicate
                )
                continue

            if isinstance(object_, Literal) and object_.language != "en":
                logger.debug(
                    "item %s: ignoring non-English literal: %s",
                    resource.identifier,
                    object_,
                )
                continue

            if predicate == SKOS.altLabel:
                assert isinstance(object_, Literal)
                alt_labels.append(object_.value)
                continue

            if predicate == SKOS.prefLabel:
                assert isinstance(object_, Literal)
                pref_label = object_.value
                continue

            if predicate == SCHEMA.description:
                assert isinstance(object_, Literal)
                description = object_.value
                continue

            added_property = False
            for property_definition in property_definitions:
                if predicate == property_definition.claim_uri:
                    try:
                        full_statements.append(
                            WikidataFullStatement.from_rdf(
                                logger=logger,
                                property_definitions=property_definitions,
                                resource=resource.graph.resource(object_),
                            )
                        )
                        added_property = True
                        break
                    except ValueError:
                        pass
                elif predicate == property_definition.direct_claim_uri:
                    direct_claims.append(
                        WikidataDirectClaim.from_rdf(
                            graph=resource.graph,
                            object_=object_,
                            predicate=predicate,
                            property_definition=property_definition,
                            subject=resource.identifier,
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
                    "item parser: unknown triple (%s, %s, %s)",
                    resource.identifier,
                    predicate,
                    object_,
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
                    resource.identifier,
                    direct_claim.property_definition.direct_claim_uri,
                )
            else:
                logger.debug(
                    "item %s: direct claim %s has no corresponding full statement",
                    resource.identifier,
                    direct_claim.property_definition.direct_claim_uri,
                )
                statements.append(direct_claim)

        if pref_label is None:
            logger.warning("item %s: no pref_label detected", resource.identifier)
            return None

        return cls(
            description=description,
            labels=WikidataItemLabels(
                alt_labels=tuple(sorted(alt_labels)) if alt_labels else None,
                pref_label=pref_label,
            ),
            resource=resource,
            statements=tuple(statements),
        )

    @property
    def label(self):
        return self.labels.pref_label

    @property
    def labels(self) -> WikidataItemLabels:
        return self.__labels

    @property
    def statements(self) -> Tuple[WikidataStatement, ...]:
        return self.__statements

    def statements_by_property_label(self) -> Dict[str, List[WikidataStatement]]:
        result = {}
        for statement in self.statements:
            result.setdefault(statement.property_definition.label, []).append(statement)
        return result

    def to_rdf(self, graph: Graph) -> Resource:
        raise NotImplementedError
