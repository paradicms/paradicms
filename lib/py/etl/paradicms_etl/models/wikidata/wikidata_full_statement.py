import logging
from dataclasses import dataclass
from datetime import datetime
from typing import Optional, Tuple

from rdflib import Graph, Literal, PROV, RDF, URIRef
from rdflib.resource import Resource

from paradicms_etl.models.cms.cms_date_time_description import CmsDateTimeDescription
from paradicms_etl.models.wikidata.wikidata_property_definition import (
    WikidataPropertyDefinition,
)
from paradicms_etl.models.wikidata.wikidata_statement import WikidataStatement
from paradicms_etl.namespaces import WIKIBASE

logger = logging.getLogger(__name__)


@dataclass
class WikidataFullStatement(WikidataStatement):
    __IGNORE_PREDICATES = {PROV.wasDerivedFrom, WIKIBASE.rank}
    __IGNORE_VALUE_TYPES = {WIKIBASE.GlobecoordinateValue, WIKIBASE.QuantityValue}

    @classmethod
    def from_rdf(
        cls,
        *,
        property_definitions: Tuple[WikidataPropertyDefinition, ...],
        resource: Resource
    ) -> "WikidataFullStatement":
        normalized_value = None
        qualifiers = []
        value = None
        value_property_definition = None

        def get_value(predicate: Optional[URIRef]):
            if predicate is None:
                return None
            value_objects = tuple(
                object_
                for object_ in resource.graph.objects(
                    subject=resource.identifier,
                    predicate=predicate,
                )
            )
            if not value_objects:
                return None
            if len(value_objects) != 1:
                logger.warning(
                    "predicate %s has %d value objects: %s",
                    predicate,
                    len(value_objects),
                )
                return None
            value_object = value_objects[0]
            if isinstance(value_object, Literal):
                return value_object
            assert isinstance(value_object, URIRef)
            return cls.__parse_value(
                graph=resource.graph,
                value_uri=value_object,
            )

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

            for property_definition in property_definitions:
                if predicate == property_definition.statement_property_uri:
                    handled_predicates.add(predicate)

                    assert value is None
                    value = object_
                    value_property_definition = property_definition

                    statement_value = get_value(property_definition.statement_value_uri)
                    if statement_value is not None:
                        value = statement_value
                    handled_predicates.add(property_definition.statement_value_uri)

                    statement_value_normalized = get_value(
                        property_definition.statement_value_normalized_uri
                    )
                    if statement_value_normalized is not None:
                        normalized_value = statement_value_normalized
                    handled_predicates.add(
                        property_definition.statement_value_normalized_uri
                    )

                    break
                elif predicate == property_definition.qualifier_uri:
                    handled_predicates.add(predicate)

                    qualifier_value = get_value(property_definition.qualifier_value_uri)
                    handled_predicates.add(property_definition.qualifier_value_uri)

                    qualifier_value_normalized = get_value(
                        property_definition.qualifier_value_normalized_uri
                    )
                    handled_predicates.add(
                        property_definition.qualifier_value_normalized_uri
                    )

                    qualifiers.append(
                        cls.Qualifier(
                            property_definition=property_definition,
                            normalized_value=qualifier_value_normalized,
                            value=qualifier_value
                            if qualifier_value is not None
                            else object_,
                        )
                    )

                    break

        for predicate in resource.graph.predicates(subject=resource.identifier):
            if predicate in handled_predicates:
                continue
            logger.warning(
                "full statement parser: unknown triple (%s, %s, %s)",
                resource.identifier,
                predicate,
                object_,
            )

        if value is None:
            raise ValueError("unable to parse value of full statement")

        assert value_property_definition is not None
        return cls(
            normalized_value=normalized_value,
            property_definition=value_property_definition,
            qualifiers=tuple(qualifiers),
            value=value,
        )

    @classmethod
    def __parse_value(cls, *, graph: Graph, value_uri: URIRef):
        # Parse a TimeValue or other value object
        value_types = tuple(graph.objects(subject=value_uri, predicate=RDF.type))
        if not value_types:
            return value_uri  # Refers to an authority URI outside the graph
        assert len(value_types) == 1
        value_type = value_types[0]
        if value_type in cls.__IGNORE_VALUE_TYPES:
            logger.info("ignoring %s %s", value_types, value_uri)
            return None
        elif value_type == WIKIBASE.TimeValue:
            time_value_literal = tuple(
                graph.objects(subject=value_uri, predicate=WIKIBASE.timeValue)
            )[0]
            assert isinstance(time_value_literal, Literal)
            time_value = time_value_literal.toPython()
            if not isinstance(time_value, datetime):
                logger.info("ignoring malformed time value: %s", time_value)
                return None

            time_precision_literal = tuple(
                graph.objects(subject=value_uri, predicate=WIKIBASE.timePrecision)
            )[0]
            assert isinstance(time_precision_literal, Literal)
            time_precision = time_precision_literal.toPython()
            assert isinstance(time_precision, int)

            if time_precision < 9:  # 9 = year
                return None
            month = day = hour = minute = second = None
            year = time_value.year
            if time_precision >= 10:
                month = time_value.month
            if time_precision >= 11:
                day = time_value.day
            if time_precision >= 12:
                hour = time_value.hour
            if time_precision >= 13:
                minute = time_value.minute
            if time_precision >= 14:
                second = time_value.second

            parsed_value = (
                CmsDateTimeDescription.builder()
                .set_year(year)
                .set_month(month)
                .set_day(day)
                .set_hour(hour)
                .set_minute(minute)
                .set_second(second)
                .build()
            )
            logger.debug(
                "parsed %s from %s with precision=%d",
                parsed_value,
                time_value_literal.value,
                time_precision,
            )
            return parsed_value
        else:
            raise NotImplementedError(str(value_type))
