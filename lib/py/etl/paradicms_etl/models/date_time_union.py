from datetime import date, datetime
from typing import Union

from paradicms_etl.models.date_time_description import DateTimeDescription

DateTimeUnion = Union[date, datetime, DateTimeDescription, str]
