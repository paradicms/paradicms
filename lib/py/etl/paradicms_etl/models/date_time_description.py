import datetime

from rdflib import BNode, Literal, XSD, RDF
from rdflib.resource import Resource

from paradicms_etl.models.resource_backed_model import ResourceBackedModel
from paradicms_etl.namespaces import TIME, CMS


class DateTimeDescription(ResourceBackedModel):
    """
    Description of date and time structured with separate values for the various elements of a calendar-clock system.

    The temporal reference system is fixed to Gregorian Calendar, and the range of year, month, day properties
    restricted to corresponding XML Schema types xsd:gYear, xsd:gMonth and xsd:gDay, respectively.

    (https://www.w3.org/TR/owl-time/#time:DateTimeDescription)
    """

    class Builder(ResourceBackedModel.Builder):
        def __init__(self):
            ResourceBackedModel.Builder.__init__(self, BNode())

        def build(self) -> "DateTimeDescription":
            return DateTimeDescription(self._resource)

        def set_day(self, day: int) -> "DateTimeDescription.Builder":
            self.add(
                # https://www.w3.org/TR/owl-time/#time:DateTimeDescription
                # .add(RDF.type, TIME.DateTimeDescription)
                # https://www.w3.org/TR/owl-time/#time:day
                # https://www.w3.org/TR/xmlschema11-2/#gDay
                TIME.day,
                Literal("---" + str(day).zfill(2), datatype=XSD.gDay),
            )
            return self

        def set_hour(self, hour: int) -> "DateTimeDescription.Builder":
            self.add(
                # https://www.w3.org/TR/owl-time/#time:hour
                TIME.hour,
                hour,
            )
            return self

        def set_minute(self, minute: int) -> "DateTimeDescription.Builder":
            self.add(
                # https://www.w3.org/TR/owl-time/#time:minute
                TIME.minute,
                minute,
            )
            return self

        def set_month(self, month: int) -> "DateTimeDescription.Builder":
            self.add(
                # https://www.w3.org/TR/owl-time/#time:month
                # https://www.w3.org/TR/xmlschema11-2/#gMonth
                TIME.month,
                Literal("--" + str(month).zfill(2), datatype=XSD.gMonth),
            )
            return self

        def set_second(self, second: int) -> "DateTimeDescription.Builder":
            self.add(
                # https://www.w3.org/TR/owl-time/#time:second
                TIME.second,
                Literal(second, datatype=XSD.decimal),
            )
            return self

        def set_year(self, year: int) -> "DateTimeDescription.Builder":
            self.add(
                # https://www.w3.org/TR/owl-time/#time:year
                # https://www.w3.org/TR/xmlschema11-2/#gYear
                TIME.year,
                Literal(str(year), datatype=XSD.gYear),
            )
            return self

    def __init__(self, resource: Resource):
        resource.add(RDF.type, CMS[self.__class__.__name__])
        ResourceBackedModel.__init__(self, resource)

    @classmethod
    def builder(cls):
        return cls.Builder()

    @classmethod
    def from_date(cls, date: datetime.date) -> "DateTimeDescription":
        return (
            cls.builder()
            .set_day(date.day)
            .set_month(date.month)
            .set_year(date.year)
            .build()
        )
