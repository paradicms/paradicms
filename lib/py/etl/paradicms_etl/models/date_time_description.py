from __future__ import annotations

from abc import abstractmethod
from typing import TYPE_CHECKING

from paradicms_etl.model import Model

if TYPE_CHECKING:
    import datetime


class DateTimeDescription(Model):
    """
    Description of date and time structured with separate values for the various elements of a calendar-clock system.

    The temporal reference system is fixed to Gregorian Calendar, and the range of year, month, day properties
    restricted to corresponding XML Schema types xsd:gYear, xsd:gMonth and xsd:gDay, respectively.

    (https://www.w3.org/TR/owl-time/#time:DateTimeDescription)
    """

    @classmethod
    @abstractmethod
    def from_date(cls, date: datetime.date) -> DateTimeDescription:
        raise NotImplementedError
        raise NotImplementedError
