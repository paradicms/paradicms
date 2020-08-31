from dataclasses import dataclass
from datetime import datetime
from logging import Logger
from typing import Optional, Tuple, Union

from rdflib import Graph, Literal, PROV, RDF, URIRef

from paradicms_etl.models.date_time_description import DateTimeDescription
from paradicms_etl.pipelines.wikidata.wikidata_namespace import WIKIBASE
from paradicms_etl.pipelines.wikidata.wikidata_property_definition import (
    WikidataPropertyDefinition,
)
from paradicms_etl.pipelines.wikidata.wikidata_statement import WikidataStatement


@dataclass
class WikidataFullStatement(WikidataStatement):
    @dataclass
    class Qualifier:
        property_definition: WikidataPropertyDefinition
        normalized_value: Union[Literal, URIRef, object]
        value: Union[Literal, URIRef, object]  # Can be replaced by WikidataItem

    qualifiers: Tuple[Qualifier, ...]

    @classmethod
    def parse(
        cls,
        *,
        graph: Graph,
        logger: Logger,
        property_definitions: Tuple[WikidataPropertyDefinition, ...],
        uri: URIRef
    ):
        IGNORE_PREDICATES = {PROV.wasDerivedFrom, WIKIBASE.rank}

        qualifiers = []
        normalized_value = None
        value = None
        value_property_definition = None

        def get_value(predicate: Optional[URIRef]):
            if predicate is None:
                return None
            value_objects = tuple(
                object_ for object_ in graph.objects(subject=uri, predicate=predicate,)
            )
            if not value_objects:
                return None
            assert len(value_objects) == 1, predicate
            value_object = value_objects[0]
            if isinstance(value_object, Literal):
                return value_object
            assert isinstance(value_object, URIRef)
            return cls.__parse_value(
                graph=graph, logger=logger, value_uri=value_object,
            )

        handled_predicates = set()
        for (predicate, object_,) in graph.predicate_objects(subject=uri):
            if predicate in IGNORE_PREDICATES:
                handled_predicates.add(predicate)
                logger.debug("full statement %s: ignoring predicate %s", uri, predicate)
                continue
            if predicate == RDF.type:
                assert object_ == WIKIBASE.Statement or object_ == WIKIBASE.BestRank
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

        for predicate in graph.predicates(subject=uri):
            if predicate in handled_predicates:
                continue
            logger.warning(
                "full statement parser: unknown triple (%s, %s, %s)",
                uri,
                predicate,
                object_,
            )

        assert value is not None
        assert value_property_definition is not None
        return cls(
            normalized_value=normalized_value,
            property_definition=value_property_definition,
            qualifiers=tuple(qualifiers),
            value=value,
        )

    @classmethod
    def __parse_value(cls, *, graph: Graph, logger: Logger, value_uri: URIRef):
        # Parse a TimeValue or other value object
        value_types = tuple(graph.objects(subject=value_uri, predicate=RDF.type))
        if not value_types:
            return value_uri  # Refers to an authority URI outside the graph
        assert len(value_types) == 1
        value_type = value_types[0]
        if value_type == WIKIBASE.QuantityValue:
            logger.info("ignoring QuantityValue %s", value_uri)
            return None
        elif value_type == WIKIBASE.TimeValue:
            time_value_literal = tuple(
                graph.objects(subject=value_uri, predicate=WIKIBASE.timeValue)
            )[0]
            assert isinstance(time_value_literal, Literal)
            time_value = time_value_literal.toPython()
            assert isinstance(time_value, datetime)

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

            parsed_value = DateTimeDescription(
                year=year,
                month=month,
                day=day,
                hour=hour,
                minute=minute,
                second=second,
                uri=value_uri,
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
