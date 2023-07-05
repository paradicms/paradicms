import logging
from typing import Dict, List, Optional, Tuple

from rdflib import Graph, Literal, RDF, RDFS, SKOS, URIRef, OWL, ConjunctiveGraph
from rdflib.resource import Resource

from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.models.wikibase.wikibase_article import WikibaseArticle
from paradicms_etl.models.wikibase.wikibase_direct_claim import WikibaseDirectClaim
from paradicms_etl.models.wikibase.wikibase_full_statement import WikibaseFullStatement
from paradicms_etl.models.wikibase.wikibase_property_definition import (
    WikibasePropertyDefinition,
)
from paradicms_etl.models.wikibase.wikibase_statement import WikibaseStatement
from paradicms_etl.namespaces import WIKIBASE, WDT, SDOHTTP

logger = logging.getLogger(__name__)


class WikibaseItem(ResourceBackedNamedModel):
    __IGNORE_PREDICATES = {
        URIRef(SDOHTTP.description),
        URIRef(SDOHTTP.name),
        RDF.type,
        RDFS.label,
    }

    def __init__(
        self,
        resource: Resource,
        *,
        exclude_redundant_statements: bool = True,
        property_definitions: Optional[Tuple[WikibasePropertyDefinition, ...]] = None,
    ):
        ResourceBackedNamedModel.__init__(self, resource)

        if property_definitions is None:
            property_definitions = WikibasePropertyDefinition.from_rdf(
                graph=resource.graph
            )

        alt_labels = []
        articles = []
        description = None
        direct_claims = []
        full_statements = []
        pref_label = None

        for article_uri in resource.graph.subjects(
            predicate=SDOHTTP.about,
            object=resource.identifier,
        ):

            if tuple(resource.graph.triples((article_uri, RDF.type, SDOHTTP.Article))):
                article = WikibaseArticle.from_rdf(
                    resource=resource.graph.resource(article_uri)
                )
                if article is not None:
                    articles.append(article)

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
                elif predicate == SDOHTTP.description:
                    description = object_.value
                    continue

            if predicate in self.__IGNORE_PREDICATES:
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
                logger.debug(
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

        self.__alt_labels = tuple(sorted(alt_labels))
        self.__articles = tuple(articles)
        self.__description = description
        self.__pref_label = pref_label
        self.__statements = tuple(statements)
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

    @property
    def label(self):
        return self.pref_label

    @classmethod
    def label_property_uri(cls) -> Optional[URIRef]:
        raise NotImplementedError

    @property
    def pref_label(self) -> Optional[str]:
        return self.__pref_label

    @classmethod
    def rdf_type_uri(cls):
        return WIKIBASE.Item

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

    def to_concise_rdf(
        self,
        *,
        graph: Graph,
        include_non_english_articles=False,
        include_non_english_literals=False,
    ) -> Resource:
        if isinstance(graph, ConjunctiveGraph):
            context = graph.get_context(self._resource.identifier())
        else:
            context = graph

        if not include_non_english_literals:
            for s, p, o in self._resource.graph:
                if (
                    isinstance(o, Literal)
                    and o.language is not None
                    and o.language != "en"
                ):
                    continue
                context.add((s, p, o))

        if not include_non_english_articles:
            for article_subject, article_in_language in tuple(
                context.subject_objects(predicate=SDOHTTP.inLanguage)
            ):
                assert isinstance(article_in_language, Literal)
                if article_in_language.toPython() != "en":
                    context.remove((article_subject, None, None))

        # Remove the schema:DatasetCore declaration
        for schema_dataset_subject_uri in tuple(
            context.subjects(
                predicate=RDF.type, object=SDOHTTP.DatasetCore, unique=True
            )
        ):
            context.remove((schema_dataset_subject_uri, None, None))

        # Remove full statements that don't add anything on a direct statement
        #     <http://www.wikidata.org/entity/statement/Q215627-45c7dda3-4ac2-1264-1fd0-602159435ee8> a wikibase:BestRank,
        #     wikibase:Statement ;
        # wikibase:rank wikibase:NormalRank ;
        # ns197:P1552 wd:Q3968640 .
        STATEMENT_PROPERTY_BASE_URI = "http://www.wikidata.org/prop/statement/"
        for statement_uri in context.subjects(
            predicate=RDF.type, object=WIKIBASE.Statement, unique=True
        ):
            statement_triples = tuple(context.triples((statement_uri, None, None)))
            if len(statement_triples) != 4:
                continue
            statement_property_triples = []
            for statement_triple in statement_triples:
                if statement_triple[1] == RDF.type:
                    continue
                elif str(statement_triple[1]).startswith(str(WIKIBASE)):
                    continue
                elif str(statement_triple[1]).startswith(STATEMENT_PROPERTY_BASE_URI):
                    statement_property_triples.append(statement_triple)
                else:
                    statement_property_triples = []
                    break
            if len(statement_property_triples) != 1:
                continue
            statement_property_triple = statement_property_triples[0]
            property_id = str(statement_property_triple[1])[
                len(STATEMENT_PROPERTY_BASE_URI) :
            ]
            have_statement_value_as_direct_value = False
            for direct_value in self._resource.objects(WDT[property_id]):
                if isinstance(direct_value, Resource):
                    if direct_value.identifier == statement_property_triple[2]:
                        have_statement_value_as_direct_value = True
                        break
                elif direct_value == statement_property_triple[2]:
                    have_statement_value_as_direct_value = True
                    break
            if not have_statement_value_as_direct_value:
                continue
            # Full statement only has one actual property -- the rest is wikibase: metadata -- and the value of that
            # property is the same as the direct value
            # Remove all of the full statement's triples
            context.remove((statement_uri, None, None))
            # Remove all references to the statement
            context.remove((None, None, statement_uri))

        # Remove wikibase:wikiGroup statements
        context.remove((None, WIKIBASE.wikiGroup, None))

        # Remove rdf:type OWL type nodes
        for owl_property_type_uri in (OWL.DatatypeProperty, OWL.ObjectProperty):
            context.remove((None, None, owl_property_type_uri))

        # Remove owl:Restriction blank nodes
        for owl_restriction_subject in tuple(
            context.subjects(predicate=RDF.type, object=OWL.Restriction, unique=True)
        ):
            context.remove((owl_restriction_subject, None, None))

        # Remove prop/novalue OWL detritus
        #     <http://www.wikidata.org/prop/novalue/P10017> a owl:Class ;
        #         owl:complementOf [ ] .
        for prop_novalue_subject in tuple(
            context.subjects(predicate=RDF.type, object=OWL.Class)
        ):
            context.remove((prop_novalue_subject, None, None))

        # Remove non-primary items
        # Statements about these may be added back by to_type_rdf
        for wikibase_item_subject_uri in tuple(
            context.subjects(predicate=RDF.type, object=WIKIBASE.Item, unique=True)
        ):
            if wikibase_item_subject_uri == self._resource.identifier:
                continue
            for property_uri in (
                RDF.type,
                RDFS.label,
                SDOHTTP.description,
                SDOHTTP.name,
                SKOS.prefLabel,
            ):
                context.remove((wikibase_item_subject_uri, property_uri, None))

        # Remove some unnecessary property properties
        for wikibase_property_subject_uri in tuple(
            context.subjects(predicate=RDF.type, object=WIKIBASE.Property, unique=True)
        ):
            # Leave rdfs:label
            for property_uri in (
                SDOHTTP.description,
                SDOHTTP.name,
                SKOS.prefLabel,
                WIKIBASE.novalue,
                WIKIBASE.propertyType,
                WIKIBASE.reference,
                WIKIBASE.referenceValue,
                WIKIBASE.referenceValueNormalized,
            ):
                context.remove((wikibase_property_subject_uri, property_uri, None))

        return context.resource(self._resource.identifier)

    def to_type_rdf(
        self,
        *,
        graph: Graph,
        subclass_of_property_uri: URIRef,
    ) -> "Resource":
        for property_ in (
            OWL.sameAs,
            subclass_of_property_uri,
        ):
            for triple in self._resource.graph.triples(
                (self._resource.identifier, property_, None)
            ):
                graph.add(triple)
        return graph.resource(self._resource.identifier)
