from __future__ import annotations

import logging
from typing import ClassVar

from rdflib import OWL, RDF, RDFS, SKOS, Graph, Literal, URIRef
from rdflib.resource import Resource

from paradicms_etl.models.resource_backed_model import (
    ResourceBackedModel,
    _StatementObject,
)
from paradicms_etl.namespaces import PROV, SDOHTTP, WDT, WIKIBASE

logger = logging.getLogger(__name__)


class WikibaseItem(ResourceBackedModel):
    __INCLUDE_PREDICATES: ClassVar[set[URIRef]] = {
        OWL.sameAs,
        RDF.type,
        RDFS.label,
        SDOHTTP.description,
        SKOS.altLabel,
        SKOS.prefLabel,
    }

    __STATEMENT_PROPERTY_BASE_URI = "http://www.wikidata.org/prop/statement/"

    def __eq__(self, other: object):
        if not isinstance(other, WikibaseItem):
            return False
        return self.uri == other.uri

    def direct_claim_values(
        self, direct_claim_uri: URIRef
    ) -> tuple[Literal | URIRef, ...]:
        return tuple(self._values(direct_claim_uri, self.__map_term_to_literal_or_uri))

    @classmethod
    def from_rdf(cls, resource: Resource) -> WikibaseItem:
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

        for p, o in resource.graph.predicate_objects(subject=resource.identifier):
            if str(p).startswith(str(WDT)) or str(p).startswith(
                "http://www.wikidata.org/prop/direct-normalized/"
            ):
                # Add a direct claim
                minimal_graph.add((resource.identifier, p, o))
            elif str(p).startswith("http://www.wikidata.org/prop/"):
                # A full statement
                assert isinstance(o, URIRef)
                assert o.startswith("http://www.wikidata.org/entity/statement/")
                statement_uri = o
                statement_duplicates_direct_claim = True
                for statement_triple in resource.graph.triples(
                    (statement_uri, None, None)
                ):
                    if (
                        statement_triple[1] == RDF.type
                        or statement_triple[1] == PROV.wasDerivedFrom
                    ):
                        continue
                    elif str(statement_triple[1]).startswith(str(WIKIBASE)):
                        continue
                    elif str(statement_triple[1]).startswith(
                        cls.__STATEMENT_PROPERTY_BASE_URI
                    ):
                        statement_property_triple = statement_triple
                        statement_value = statement_property_triple[2]
                        direct_values = tuple(
                            resource.graph.objects(
                                predicate=WDT[
                                    str(statement_property_triple[1])[
                                        len(cls.__STATEMENT_PROPERTY_BASE_URI) :
                                    ]
                                ],
                                subject=resource.identifier,
                            )
                        )
                        if not any(
                            direct_value == statement_value
                            for direct_value in direct_values
                        ):
                            logger.debug(
                                "statement (%s) has value (%s) that's not present in direct values (%s)",
                                statement_uri,
                                statement_value,
                                direct_values,
                            )
                            statement_duplicates_direct_claim = False
                            break
                    else:
                        logger.debug(
                            "unrecognized statement triple: %s", statement_triple
                        )
                        statement_duplicates_direct_claim = False
                        break
                if not statement_duplicates_direct_claim:
                    # Add the full statement
                    minimal_graph.add((resource.identifier, p, o))
                    for statement_p, statement_o in resource.graph.predicate_objects(
                        subject=statement_uri
                    ):
                        minimal_graph.add((statement_uri, statement_p, statement_o))
            elif p in cls.__INCLUDE_PREDICATES:
                # Some other predicates
                if not isinstance(o, Literal) or o.language == "en":
                    minimal_graph.add((resource.identifier, p, o))

        # Add all values
        for s in resource.graph.subjects():
            if str(s).startswith("http://www.wikidata.org/value/"):
                for p, o in resource.graph.predicate_objects(subject=s):
                    minimal_graph.add((s, p, o))

        # Add all wdt:P279 (subclass of) statements
        # These are not part of the item but we need to keep them through multiple to_rdf and from_rdf passes.
        for triple in resource.graph.triples((None, WDT.P279, None)):
            minimal_graph.add(triple)

        return cls(minimal_graph.resource(resource.identifier))

    @classmethod
    def label_property_uri(cls) -> URIRef | None:
        return SKOS.prefLabel

    @staticmethod
    def __map_term_to_literal_or_uri(
        term: _StatementObject,
    ) -> Literal | URIRef | None:
        if isinstance(term, Literal):
            return term
        if isinstance(term, Resource) and isinstance(term.identifier, URIRef):
            return term.identifier
        return None

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return WIKIBASE.Item

    def to_type_rdf(
        self,
        *,
        graph: Graph,
        subclass_of_property_uri: URIRef,
    ) -> Resource:
        for property_ in (
            OWL.sameAs,
            subclass_of_property_uri,
        ):
            for triple in self.resource.graph.triples(
                (self.resource.identifier, property_, None)
            ):
                graph.add(triple)
        return graph.resource(self.resource.identifier)
