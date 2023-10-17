from datetime import datetime

from rdflib import URIRef  # type: ignore

from paradicms_etl.models.date_time_description import DateTimeDescription
from paradicms_etl.models.resource_backed_model import ResourceBackedModel
from paradicms_etl.namespaces.wikibase import WIKIBASE


class WikibaseTimeValue(ResourceBackedModel, DateTimeDescription):
    @property
    def day(self) -> int | None:
        return self.__time_value.day if self.__time_precision >= 11 else None

    @property
    def hour(self) -> int | None:
        return self.__time_value.hour if self.__time_precision >= 12 else None

    @property
    def minute(self) -> int | None:
        return self.__time_value.minute if self.__time_precision >= 13 else None

    @property
    def month(self) -> int | None:
        return self.__time_value.month if self.__time_precision >= 10 else None

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return WIKIBASE.TimeValue

    @property
    def second(self) -> int | None:
        return self.__time_value.second if self.__time_precision >= 14 else None

    @property
    def __time_precision(self) -> int:
        # Per https:#en.wikibooks.org/wiki/SPARQL/WIKIDATA_Precision,_Units_and_Coordinates
        # The codes for precision are
        # 0: billion years,
        # 1: hundred million years,
        # 3: million years,
        # 4: hundred thousand years,
        # 5: ten thousand years,
        # 6: millennium,
        # 7: century,
        # 8: decade,
        # 9: year,
        # 10: month,
        # 11: day,
        # 12: hour,
        # 13: minute,
        # 14: second.
        return self._required_value(WIKIBASE.timePrecision, self._map_term_to_int)

    @property
    def __time_time_zone(self) -> int:
        # Timezone as an offset from UTC in minutes
        return self._required_value(WIKIBASE.timeTimeZone, self._map_term_to_int)

    @property
    def __time_value(self) -> datetime:
        literal = self._required_value(WIKIBASE.timeValue, self._map_term_to_literal)
        value = literal.toPython()
        assert isinstance(value, datetime)
        assert self.__time_time_zone == 0
        return value

    @property
    def year(self) -> int | None:
        return self.__time_value.year if self.__time_precision >= 9 else None
