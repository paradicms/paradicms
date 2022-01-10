import datetime
from typing import Optional, Union

from rdflib import BNode, Literal, RDF, XSD

from paradicms_etl._model import _Model
from paradicms_etl.namespaces import TIME


class DateTimeDescription(_Model):
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
        resource = cls._create_resource(identifier=BNode())
        # https://www.w3.org/TR/owl-time/#time:DateTimeDescription
        resource.add(RDF.type, TIME.DateTimeDescription)
        if day is not None:
            # https://www.w3.org/TR/owl-time/#time:day
            # https://www.w3.org/TR/xmlschema11-2/#gDay
            resource.add(
                TIME.day, Literal("---" + str(day).zfill(2), datatype=XSD.gDay)
            )
        if hour is not None:
            # https://www.w3.org/TR/owl-time/#time:hour
            resource.add(TIME.hour, Literal(hour))
        if minute is not None:
            # https://www.w3.org/TR/owl-time/#time:minute
            resource.add(TIME.minute, Literal(minute))
        if month is not None:
            # https://www.w3.org/TR/owl-time/#time:month
            # https://www.w3.org/TR/xmlschema11-2/#gMonth
            resource.add(
                TIME.month, Literal("--" + str(month).zfill(2), datatype=XSD.gMonth)
            )
        if second is not None:
            # https://www.w3.org/TR/owl-time/#time:second
            resource.add(TIME.second, Literal(second), datatype=XSD.decimal)
        if year is not None:
            # https://www.w3.org/TR/owl-time/#time:year
            # https://www.w3.org/TR/xmlschema11-2/#gYear
            resource.add(TIME.year, Literal(str(year), datatype=XSD.gYear))
        return cls(resource=resource)
