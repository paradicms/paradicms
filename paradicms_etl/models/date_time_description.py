import datetime
from typing import Optional, Union

from rdflib import BNode, Literal, XSD

from paradicms_etl.model import Model
from paradicms_etl.namespaces import TIME
from paradicms_etl.utils.resource_builder import ResourceBuilder


class DateTimeDescription(Model):
    """
    Description of date and time structured with separate values for the various elements of a calendar-clock system.

    The temporal reference system is fixed to Gregorian Calendar, and the range of year, month, day properties
    restricted to corresponding XML Schema types xsd:gYear, xsd:gMonth and xsd:gDay, respectively.

    (https://www.w3.org/TR/owl-time/#time:DateTimeDescription)
    """

    @classmethod
    def from_date(cls, date: datetime.date) -> "DateTimeDescription":
        return cls.from_fields(day=date.day, month=date.month, year=date.year)

    @classmethod
    def from_fields(
        cls,
        *,
        day: Optional[int] = None,
        hour: Optional[int] = None,
        minute: Optional[int] = None,
        second: Union[int, float, None] = None,
        month: Optional[int] = None,
        year: Optional[int] = None,
    ) -> "DateTimeDescription":
        return cls(
            ResourceBuilder(BNode())
            # https://www.w3.org/TR/owl-time/#time:DateTimeDescription
            # .add(RDF.type, TIME.DateTimeDescription)
            # https://www.w3.org/TR/owl-time/#time:day
            # https://www.w3.org/TR/xmlschema11-2/#gDay
            .add(
                TIME.day,
                Literal("---" + str(day).zfill(2), datatype=XSD.gDay)
                if day is not None
                else None,
            )
            # https://www.w3.org/TR/owl-time/#time:hour
            .add(TIME.hour, hour)
            # https://www.w3.org/TR/owl-time/#time:minute
            .add(TIME.minute, minute)
            # https://www.w3.org/TR/owl-time/#time:month
            # https://www.w3.org/TR/xmlschema11-2/#gMonth
            .add(
                TIME.month,
                Literal("--" + str(month).zfill(2), datatype=XSD.gMonth)
                if month is not None
                else None,
            )
            # https://www.w3.org/TR/owl-time/#time:second
            .add(
                TIME.second,
                Literal(second, datatype=XSD.decimal) if second is not None else None,
            )
            # https://www.w3.org/TR/owl-time/#time:year
            # https://www.w3.org/TR/xmlschema11-2/#gYear
            .add(
                TIME.year,
                Literal(str(year), datatype=XSD.gYear) if year is not None else None,
            ).build()
        )
