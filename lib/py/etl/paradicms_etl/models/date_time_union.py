from datetime import date, datetime

from paradicms_etl.models.date_time_description import DateTimeDescription

DateTimeUnion = date | datetime | DateTimeDescription | str
