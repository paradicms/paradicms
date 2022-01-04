import datetime
from typing import Optional

from rdflib import BNode, Literal, RDF, XSD

from paradicms_etl._model import _Model
from paradicms_etl.namespaces import TIME


class DateTimeDescription(_Model):
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
        second: Optional[int] = None,
        month: Optional[int] = None,
        year: Optional[int] = None,
    ) -> "DateTimeDescription":
        resource = cls._create_resource(identifier=BNode())
        resource.add(RDF.type, TIME.DateTimeDescription)
        if day is not None:
            resource.add(TIME.day, Literal("---" + str(day), datatype=XSD.gDay))
        if hour is not None:
            resource.add(TIME.hour, Literal(hour))
        if minute is not None:
            resource.add(TIME.minute, Literal(minute))
        if month is not None:
            resource.add(TIME.month, Literal("---" + str(month), datatype=XSD.gMonth))
        if year is not None:
            resource.add(TIME.year, Literal(str(year), datatype=XSD.gYear))
        return cls(resource=resource)
