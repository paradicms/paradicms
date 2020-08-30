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
    direct_claims: Tuple[WikidataDirectClaim, ...]
    full_statements: Tuple[WikidataFullStatement, ...]
    uri: URIRef

    @classmethod
    def parse(
        cls,
        *,
        graph: Graph,
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
                continue

            if isinstance(object_, Literal) and object_.language != "en":
                continue

            if predicate == SKOS.altLabel:
                assert isinstance(object_, Literal)
                alt_labels.append(object_.value)
            elif predicate == SKOS.prefLabel:
                assert isinstance(object_, Literal)
                pref_label = object_.value
            else:
                added_property = False
                for property_definition in property_definitions:
                    if predicate == property_definition.claim_uri:
                        full_statements.append(
                            WikidataFullStatement.parse(
                                graph=graph,
                                property_definitions=property_definitions,
                                uri=object_,
                            )
                        )
                        added_property = True
                    elif (
                        predicate == property_definition.direct_claim_uri
                        or predicate == property_definition.direct_claim_normalized_uri
                    ):
                        direct_claims.append(
                            WikidataDirectClaim(
                                property_definition=property_definition, value=object_
                            )
                        )
                        added_property = True
                        break
                if not added_property:
                    print(
                        "unknown item triple", uri, predicate, "with object", object_,
                    )

        assert pref_label is not None

        return cls(
            direct_claims=tuple(direct_claims),
            labels=Labels(
                alt_labels=tuple(alt_labels) if alt_labels else None,
                pref_label=pref_label,
            ),
            full_statements=tuple(full_statements),
            uri=uri,
        )

    def statements(self) -> Generator[WikidataStatement, None, None]:
        yield from self.direct_claims
        yield from self.full_statements

    def statements_by_property_label(self) -> Dict[str, List[WikidataStatement]]:
        result = {}
        for statement in self.statements():
            result.setdefault(statement.property_definition.label, []).append(statement)
        return result
