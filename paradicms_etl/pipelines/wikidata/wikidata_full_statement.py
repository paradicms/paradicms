from dataclasses import dataclass
from datetime import datetime
from typing import Tuple, Union

from rdflib import Graph, Literal, PROV, RDF, URIRef

from paradicms_etl.models.partial_date import PartialDate
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
        value: Union[Literal, URIRef, object]  # Can be replaced by WikidataItem

    qualifiers: Tuple[Qualifier, ...]

    @classmethod
    def parse(
        cls,
        *,
        graph: Graph,
        property_definitions: Tuple[WikidataPropertyDefinition, ...],
        uri: URIRef
    ):
        IGNORE_PREDICATES = {PROV.wasDerivedFrom, WIKIBASE.rank}

        qualifiers = []
        value = None
        value_property_definition = None
        for (predicate, object_,) in graph.predicate_objects(subject=uri):
            if predicate in IGNORE_PREDICATES:
                continue
            if predicate == RDF.type:
                assert object_ == WIKIBASE.Statement or object_ == WIKIBASE.BestRank
                continue

            for property_definition in property_definitions:
                if predicate == property_definition.statement_property_uri:
                    assert value is None
                    value = object_
                    value_property_definition = property_definition

                    statement_value_objects = tuple(
                        object_
                        for object_ in graph.objects(
                            subject=uri,
                            predicate=property_definition.statement_value_uri,
                        )
                    )

                    if statement_value_objects:
                        assert len(statement_value_objects) == 1
                        parsed_value = cls.__parse_value(
                            graph=graph, value_uri=statement_value_objects[0]
                        )
                        if parsed_value is not None:
                            value = parsed_value

                    break
                elif predicate == property_definition.qualifier_uri:
                    qualifier_value_objects = tuple(
                        object_
                        for object_ in graph.objects(
                            subject=uri,
                            predicate=property_definition.qualifier_value_uri,
                        )
                    )

                    if qualifier_value_objects:
                        assert len(qualifier_value_objects) == 1
                        parsed_value = cls.__parse_value(
                            graph=graph, value_uri=qualifier_value_objects[0]
                        )
                    else:
                        parsed_value = None

                    qualifiers.append(
                        cls.Qualifier(
                            property_definition=property_definition,
                            value=parsed_value if parsed_value is not None else object_,
                        )
                    )

                    break
        assert value is not None
        assert value_property_definition is not None
        return cls(
            property_definition=value_property_definition,
            qualifiers=tuple(qualifiers),
            value=value,
        )

    @classmethod
    def __parse_value(cls, graph: Graph, value_uri: URIRef):
        # Parse a TimeValue or other value object
        value_types = tuple(graph.objects(subject=value_uri, predicate=RDF.type))
        assert len(value_types) == 1
        value_type = value_types[0]
        if value_type == WIKIBASE.QuantityValue:
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

            return PartialDate(year=year, month=month, day=day)
        else:
            raise NotImplementedError(str(value_type))
