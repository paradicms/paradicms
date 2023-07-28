import logging
from typing import Dict, List, Optional, Tuple

from rdflib import Graph, Literal, RDF, RDFS, SKOS, URIRef, OWL
from rdflib.resource import Resource

from paradicms_etl.models.resource_backed_model import ResourceBackedModel
from paradicms_etl.models.wikibase.wikibase_direct_claim import WikibaseDirectClaim
from paradicms_etl.models.wikibase.wikibase_full_statement import WikibaseFullStatement
from paradicms_etl.models.wikibase.wikibase_property import (
    WikibaseProperty,
)
from paradicms_etl.models.wikibase.wikibase_statement import WikibaseStatement
from paradicms_etl.namespaces import WIKIBASE, WDT, SDOHTTP, PROV

logger = logging.getLogger(__name__)


class WikibaseItem(ResourceBackedModel):
    __IGNORE_PREDICATES = {
        SDOHTTP.description,
        SDOHTTP.name,
        RDF.type,
        RDFS.label,
        SKOS.altLabel,
        SKOS.prefLabel,
    }

    def __init__(self, resource: Resource, *, properties: Tuple[WikibaseProperty, ...]):
        ResourceBackedModel.__init__(self, resource)

        assert properties
        self.__properties = properties
        self.__statements: Optional[Tuple[WikibaseStatement, ...]] = None
        self.__statements_by_property_label: Optional[
            Dict[str, Tuple[WikibaseStatement, ...]]
        ] = None

    def __eq__(self, other):
        if not isinstance(other, WikibaseItem):
            return False
        return self.uri == other.uri

    @classmethod
    def from_wikibase_entity_rdf(
        cls, *, properties: Tuple[WikibaseProperty, ...], resource: Resource
    ) -> "WikibaseItem":
        """
        Parse a minimal version of a single WikibaseItem from the given resource's graph, rather than trying to
        retain it all.
        Reuse the 1+ properties in the given tuple rather than trying to re-parse them from the graph.
        """

        # Cut down the Graph to the essentials
        minimal_graph = Graph()

        # Add all English articles about an item
        for article_subject in resource.graph.subjects(
            predicate=SDOHTTP.about, object=resource.identifier
        ):
            if (article_subject, SDOHTTP.inLanguage, Literal("en")) in resource.graph:
                for article_triple in resource.graph.triples(
                    (article_subject, None, None)
                ):
                    minimal_graph.add(article_triple)

        # Add direct claims, rdf:type, and owl:sameAs
        for p, o in resource.graph.predicate_objects(subject=resource.identifier):
            if str(p).startswith(str(WDT)) or p == RDF.type or p == OWL.sameAs:
                minimal_graph.add((resource.identifier, p, o))

        # Add full statements that don't duplicate direct claims
        STATEMENT_PROPERTY_BASE_URI = "http://www.wikidata.org/prop/statement/"
        for statement_uri in resource.graph.subjects(
            predicate=RDF.type, object=WIKIBASE.Statement, unique=True
        ):
            statement_duplicates_direct_claim = False
            statement_triples = tuple(
                resource.graph.triples((statement_uri, None, None))
            )
            if len(statement_triples) == 4:
                statement_property_triples = []
                for statement_triple in statement_triples:
                    if (
                        statement_triple[1] == RDF.type
                        or statement_triple[1] == PROV.wasDerivedFrom
                    ):
                        continue
                    elif str(statement_triple[1]).startswith(str(WIKIBASE)):
                        continue
                    elif str(statement_triple[1]).startswith(
                        STATEMENT_PROPERTY_BASE_URI
                    ):
                        statement_property_triples.append(statement_triple)
                    else:
                        logger.debug(
                            "unrecognized statement triple: %s", statement_triple
                        )
                        statement_property_triples = []
                        break
                if len(statement_property_triples) == 1:
                    statement_property_triple = statement_property_triples[0]
                    statement_value = statement_property_triple[2]
                    property_id = str(statement_property_triple[1])[
                        len(STATEMENT_PROPERTY_BASE_URI) :
                    ]
                    for direct_value in resource.graph.objects(
                        predicate=WDT[property_id], subject=resource.identifier
                    ):
                        if isinstance(direct_value, Resource):
                            if direct_value.identifier == statement_value:
                                statement_duplicates_direct_claim = True
                                break
                        elif direct_value == statement_value:
                            statement_duplicates_direct_claim = True
                            break
            if not statement_duplicates_direct_claim:
                # Add the full statement
                for statement_p, statement_o in resource.graph.predicate_objects(
                    subject=statement_uri
                ):
                    minimal_graph.add((statement_uri, statement_p, statement_o))

        return cls(
            minimal_graph.resource(resource.identifier),
            properties=properties,
        )

    @classmethod
    def label_property_uri(cls) -> Optional[URIRef]:
        return SKOS.prefLabel

    @property
    def properties(self) -> Tuple[WikibaseProperty, ...]:
        return self.__properties

    @classmethod
    def rdf_type_uri(cls):
        return WIKIBASE.Item

    @property
    def statements(self) -> Tuple[WikibaseStatement, ...]:
        if self.__statements is None:
            direct_claims: List[WikibaseStatement] = []
            full_statements: List[WikibaseStatement] = []

            for predicate, object_ in self._resource.graph.predicate_objects(
                subject=self._resource.identifier
            ):
                # if isinstance(object_, Literal):
                #     if object_.language != "en":
                #         logger.debug(
                #             "item %s: ignoring non-English literal: %s",
                #             self._resource.identifier,
                #             object_,
                #         )
                #         continue
                #
                if predicate in self.__IGNORE_PREDICATES:
                    logger.debug(
                        "item %s: ignoring predicate %s",
                        self._resource.identifier,
                        predicate,
                    )
                    continue

                added_property = False
                for property_ in self.__properties:
                    if predicate == property_.claim_uri:
                        try:
                            full_statements.append(
                                WikibaseFullStatement.from_rdf(
                                    properties=self.__properties,
                                    resource=self._resource.graph.resource(object_),
                                )
                            )
                            added_property = True
                            break
                        except ValueError:
                            pass
                    elif predicate == property_.direct_claim_uri:
                        direct_claims.append(
                            WikibaseDirectClaim.from_rdf(
                                graph=self._resource.graph,
                                object_=object_,
                                property_=property_,
                                subject=self._resource.identifier,
                            )
                        )
                        added_property = True
                        break
                    elif predicate == property_.direct_claim_normalized_uri:
                        # Will be picked up by the direct claim parse above
                        added_property = True
                        break
                if not added_property:
                    logger.debug(
                        "item parser: unknown triple (%s, %s, %s)",
                        self._resource.identifier,
                        predicate,
                        object_,
                    )

            self.__statements = tuple(full_statements + direct_claims)

        return self.__statements

    @property
    def statements_by_property_label(self) -> Dict[str, Tuple[WikibaseStatement, ...]]:
        if self.__statements_by_property_label is None:
            statements_by_property_label: Dict[str, List[WikibaseStatement]] = {}
            for statement in self.statements:
                statements_by_property_label.setdefault(
                    statement.property_.label, []
                ).append(statement)
            self.__statements_by_property_label = {
                key: tuple(value) for key, value in statements_by_property_label.items()
            }
        return self.__statements_by_property_label

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
