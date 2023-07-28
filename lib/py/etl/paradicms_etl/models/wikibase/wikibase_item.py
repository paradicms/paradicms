import logging
from typing import Optional, Tuple, Union

from rdflib import Graph, Literal, RDF, RDFS, SKOS, URIRef, OWL
from rdflib.resource import Resource

from paradicms_etl.models.resource_backed_model import (
    ResourceBackedModel,
    _StatementObject,
)
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

    def __eq__(self, other):
        if not isinstance(other, WikibaseItem):
            return False
        return self.uri == other.uri

    def direct_claim_values(
        self, direct_claim_uri: URIRef
    ) -> Tuple[Union[Literal, URIRef], ...]:
        return tuple(self._values(direct_claim_uri, self.__map_term_to_literal_or_uri))

    @classmethod
    def from_rdf(cls, resource: Resource) -> "WikibaseItem":
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

        return cls(minimal_graph.resource(resource.identifier))

    @classmethod
    def label_property_uri(cls) -> Optional[URIRef]:
        return SKOS.prefLabel

    @staticmethod
    def __map_term_to_literal_or_uri(
        term: _StatementObject,
    ) -> Union[Literal, URIRef, None]:
        if isinstance(term, Literal):
            return term
        elif isinstance(term, Resource):
            if isinstance(term.identifier, URIRef):
                return term.identifier
        return None

    @classmethod
    def rdf_type_uri(cls):
        return WIKIBASE.Item

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
