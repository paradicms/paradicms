from typing import Optional

from rdflib import Literal, RDF, XSD

from paradicms_etl._model import _Model
from paradicms_etl.namespace import TIME


class DateTimeDescription(_Model):
    def __init__(
        self,
        *,
        day: Optional[int] = None,
        hour: Optional[int] = None,
        minute: Optional[int] = None,
        second: Optional[int] = None,
        month: Optional[int] = None,
        year: Optional[int] = None,
    ):
        _Model.__init__(self)
        self.resource.add(RDF.type, TIME.DateTimeDescription)
        if day is not None:
            self.resource.add(TIME.day, Literal("---" + str(day), datatype=XSD.gDay))
        if hour is not None:
            self.resource.add(TIME.hour, Literal(hour))
        if minute is not None:
            self.resource.add(TIME.minute, Literal(minute))
        if month is not None:
            self.resource.add(
                TIME.month, Literal("---" + str(month), datatype=XSD.gMonth)
            )
        if year is not None:
            self.resource.add(TIME.year, Literal(str(year), datatype=XSD.gYear))
