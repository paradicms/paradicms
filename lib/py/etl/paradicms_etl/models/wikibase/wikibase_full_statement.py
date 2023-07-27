import logging
from dataclasses import dataclass
from typing import Optional, Tuple, Union, List

from rdflib import Literal, PROV, RDF, URIRef
from rdflib.resource import Resource

from paradicms_etl.models.wikibase.wikibase_property_definition import (
    WikibasePropertyDefinition,
)
from paradicms_etl.models.wikibase.wikibase_statement import WikibaseStatement
from paradicms_etl.namespaces import WIKIBASE

logger = logging.getLogger(__name__)


@dataclass
class WikibaseFullStatement(WikibaseStatement):
    __IGNORE_PREDICATES = {PROV.wasDerivedFrom, WIKIBASE.rank}
    __IGNORE_VALUE_TYPES = {WIKIBASE.GlobecoordinateValue, WIKIBASE.QuantityValue}

    @classmethod
    def from_rdf(
        cls,
        *,
        property_definitions: Tuple[WikibasePropertyDefinition, ...],
        resource: Resource
    ) -> "WikibaseFullStatement":
        normalized_values: Tuple[Union[Literal, URIRef], ...] = ()
        qualifiers = []
        values: Tuple[Union[Literal, URIRef], ...] = ()
        value_property_definition = None

        def get_values(
            predicate: Optional[URIRef],
        ) -> Tuple[Union[URIRef, Literal], ...]:
            if predicate is None:
                return ()
            value_objects = tuple(
                object_
                for object_ in resource.graph.objects(
                    subject=resource.identifier,
                    predicate=predicate,
                )
            )
            non_bnode_value_objects: List[Union[Literal, URIRef]] = []
            for value_object in value_objects:
                if isinstance(value_object, (Literal, URIRef)):
                    non_bnode_value_objects.append(value_object)
                else:
                    logger.debug(
                        "blank node statement value on statement %s",
                        resource.identifier,
                    )
                    continue
            return tuple(non_bnode_value_objects)

        handled_predicates = set()
        for (
            predicate,
            object_,
        ) in resource.graph.predicate_objects(subject=resource.identifier):
            if predicate in cls.__IGNORE_PREDICATES:
                handled_predicates.add(predicate)
                logger.debug(
                    "full statement %s: ignoring predicate %s",
                    resource.identifier,
                    predicate,
                )
                continue
            if predicate == RDF.type:
                # assert (
                #     object_ == WIKIBASE.Statement or object_ == WIKIBASE.BestRank
                # ), object_
                handled_predicates.add(predicate)
                continue

            if not isinstance(object_, (Literal, URIRef)):
                logger.debug(
                    "blank node statement value on statement %s", resource.identifier
                )
                continue

            for property_definition in property_definitions:
                if predicate == property_definition.statement_property_uri:
                    handled_predicates.add(predicate)

                    assert not values
                    values = (object_,)
                    value_property_definition = property_definition

                    statement_values = get_values(
                        property_definition.statement_value_uri
                    )
                    if statement_values:
                        values = statement_values
                    handled_predicates.add(property_definition.statement_value_uri)

                    statement_values_normalized = get_values(
                        property_definition.statement_value_normalized_uri
                    )
                    if statement_values_normalized:
                        normalized_values = statement_values_normalized
                    handled_predicates.add(
                        property_definition.statement_value_normalized_uri
                    )

                    break
                elif predicate == property_definition.qualifier_uri:
                    handled_predicates.add(predicate)

                    qualifier_values = get_values(
                        property_definition.qualifier_value_uri
                    )
                    handled_predicates.add(property_definition.qualifier_value_uri)

                    qualifier_values_normalized = get_values(
                        property_definition.qualifier_value_normalized_uri
                    )
                    handled_predicates.add(
                        property_definition.qualifier_value_normalized_uri
                    )

                    qualifiers.append(
                        cls.Qualifier(
                            property_definition=property_definition,
                            normalized_values=qualifier_values_normalized,
                            values=qualifier_values if qualifier_values else (object_,),
                        )
                    )

                    break

        for predicate in resource.graph.predicates(subject=resource.identifier):
            if predicate in handled_predicates:
                continue
            logger.debug(
                "full statement parser: unknown predicate (%s, %s)",
                resource.identifier,
                predicate,
            )

        if not values:
            raise ValueError("unable to parse values of full statement")

        assert value_property_definition is not None
        return cls(
            normalized_values=normalized_values,
            property_definition=value_property_definition,
            qualifiers=tuple(qualifiers),
            values=values,
        )
