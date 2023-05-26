import logging
from typing import Dict, List, Optional, Tuple

from rdflib import Graph, Literal, RDF, RDFS, SKOS, URIRef, OWL
from rdflib.resource import Resource

from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.models.wikibase.wikibase_article import WikibaseArticle
from paradicms_etl.models.wikibase.wikibase_direct_claim import WikibaseDirectClaim
from paradicms_etl.models.wikibase.wikibase_full_statement import WikibaseFullStatement
from paradicms_etl.models.wikibase.wikibase_property_definition import (
    WikibasePropertyDefinition,
)
from paradicms_etl.models.wikibase.wikibase_statement import WikibaseStatement
from paradicms_etl.namespaces import WIKIBASE

logger = logging.getLogger(__name__)


class WikibaseItem(ResourceBackedNamedModel):
    def __init__(
        self,
        *,
        articles: Tuple[WikibaseArticle, ...],
        alt_labels: Tuple[str, ...],
        description: Optional[str],
        pref_label: Optional[str],
        statements: Tuple[WikibaseStatement, ...],
        resource: Resource,
    ):
        ResourceBackedNamedModel.__init__(self, resource)
        self.__alt_labels = alt_labels
        self.__articles = articles
        self.__description = description
        self.__pref_label = pref_label
        self.__statements = statements
        self.__statements_by_property_label: Optional[
            Dict[str, Tuple[WikibaseStatement, ...]]
        ] = None

    def __eq__(self, other):
        if not isinstance(other, WikibaseItem):
            return False
        return self.uri == other.uri

    @property
    def alt_labels(self) -> Tuple[str, ...]:
        return self.__alt_labels

    @property
    def articles(self) -> Tuple[WikibaseArticle, ...]:
        return self.__articles

    @property
    def description(self) -> Optional[str]:
        return self.__description

    @classmethod
    def from_wikidata_rdf(
        cls,
        *,
        graph: Graph,
        exclude_redundant_statements: bool = True,
        property_definitions: Optional[Tuple[WikibasePropertyDefinition, ...]] = None,
        uris: Optional[Tuple[URIRef, ...]] = None,
    ) -> Tuple["WikibaseItem", ...]:
        """
        Read items from the graph and return a tuple of them.

        If the expected URIs (uris) is not specified, reads all wikibase:Item's.
        """

        if property_definitions is None:
            property_definitions = WikibasePropertyDefinition.from_rdf(graph=graph)

        items = []
        if uris is None:
            uris = tuple(
                item_uri
                for item_uri in graph.subjects(predicate=RDF.type, object=WIKIBASE.Item)
                if isinstance(item_uri, URIRef)
            )
        for uri in uris:
            items.append(
                cls.__from_wikidata_rdf(
                    exclude_redundant_statements=exclude_redundant_statements,
                    property_definitions=property_definitions,
                    resource=graph.resource(uri),
                )
            )

        return tuple(items)

    @classmethod
    def __from_wikidata_rdf(
        cls,
        *,
        exclude_redundant_statements: bool,
        property_definitions: Tuple[WikibasePropertyDefinition, ...],
        resource: Resource,
    ) -> "WikibaseItem":
        """
        Read the item corresponding to the given URI.
        """

        IGNORE_PREDICATES = {
            # SDO namespace uses https://
            URIRef("http://schema.org/description"),
            URIRef("http://schema.org/name"),
            RDF.type,
            RDFS.label,
        }

        alt_labels = []
        description = None
        pref_label = None

        direct_claims = []
        full_statements = []
        for predicate, object_ in resource.graph.predicate_objects(
            subject=resource.identifier
        ):
            if isinstance(object_, Literal):
                if object_.language != "en":
                    logger.debug(
                        "item %s: ignoring non-English literal: %s",
                        resource.identifier,
                        object_,
                    )
                    continue

                if predicate == SKOS.altLabel:
                    alt_labels.append(object_.value)
                    continue
                elif predicate == SKOS.prefLabel:
                    pref_label = object_.value
                    continue
                elif str(predicate) == "http://schema.org/description":
                    description = object_.value
                    continue

            if predicate in IGNORE_PREDICATES:
                logger.debug(
                    "item %s: ignoring predicate %s", resource.identifier, predicate
                )
                continue

            added_property = False
            for property_definition in property_definitions:
                if predicate == property_definition.claim_uri:
                    try:
                        full_statements.append(
                            WikibaseFullStatement.from_rdf(
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
                        WikibaseDirectClaim.from_rdf(
                            graph=resource.graph,
                            object_=object_,
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
                logger.log(
                    logging.DEBUG
                    if str(predicate).startswith("http://schema.org")
                    else logging.WARNING,
                    "item parser: unknown triple (%s, %s, %s)",
                    resource.identifier,
                    predicate,
                    object_,
                )

        statements: List[WikibaseStatement]
        if exclude_redundant_statements:
            # Direct claims often duplicate full statements
            # Only retain the full statement
            statements = []
            full_statements_by_property_definition: Dict[
                int, List[WikibaseFullStatement]
            ] = {}
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
        else:
            statements = direct_claims + full_statements  # type: ignore

        return cls(
            alt_labels=tuple(sorted(alt_labels)),
            articles=tuple(
                WikibaseArticle.from_rdf(resource=resource.graph.resource(article_uri))
                for article_uri in resource.graph.subjects(
                    # SDO namespace uses https://
                    predicate=URIRef("http://schema.org/about"),
                    object=resource.identifier,
                )
                if tuple(
                    resource.graph.triples(
                        (article_uri, RDF.type, URIRef("http://schema.org/Article"))
                    )
                )
            ),
            description=description,
            pref_label=pref_label,
            resource=resource,
            statements=tuple(statements),
        )

    @property
    def label(self):
        return self.pref_label

    @property
    def pref_label(self) -> Optional[str]:
        return self.__pref_label

    @classmethod
    def rdf_type_uri(cls):
        return WIKIBASE.Item

    @property
    def same_as(self) -> Tuple[URIRef, ...]:
        return tuple(self._uri_values(OWL.sameAs))

    @property
    def statements(self) -> Tuple[WikibaseStatement, ...]:
        return self.__statements

    @property
    def statements_by_property_label(self) -> Dict[str, Tuple[WikibaseStatement, ...]]:
        if self.__statements_by_property_label is None:
            statements_by_property_label: Dict[str, List[WikibaseStatement]] = {}
            for statement in self.statements:
                statements_by_property_label.setdefault(
                    statement.property_definition.label, []
                ).append(statement)
            self.__statements_by_property_label = {
                key: tuple(value) for key, value in statements_by_property_label.items()
            }
        return self.__statements_by_property_label
