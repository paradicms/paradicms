import datetime

from rdflib import Literal, XSD, BNode, Graph

from paradicms_etl.models.cms.cms_model import CmsModel
from paradicms_etl.models.date_time_description import DateTimeDescription
from paradicms_etl.namespaces import TIME


class CmsDateTimeDescription(CmsModel, DateTimeDescription):
    class Builder(CmsModel.Builder):
        def build(self) -> "CmsDateTimeDescription":
            return CmsDateTimeDescription(self._resource)

        def set_day(self, day: int) -> "CmsDateTimeDescription.Builder":
            self.add(
                # https://www.w3.org/TR/owl-time/#time:CmsDateTimeDescription
                # .add(RDF.type, TIME.CmsDateTimeDescription)
                # https://www.w3.org/TR/owl-time/#time:day
                # https://www.w3.org/TR/xmlschema11-2/#gDay
                TIME.day,
                Literal("---" + str(day).zfill(2), datatype=XSD.gDay),
            )
            return self

        def set_hour(self, hour: int) -> "CmsDateTimeDescription.Builder":
            self.add(
                # https://www.w3.org/TR/owl-time/#time:hour
                TIME.hour,
                hour,
            )
            return self

        def set_minute(self, minute: int) -> "CmsDateTimeDescription.Builder":
            self.add(
                # https://www.w3.org/TR/owl-time/#time:minute
                TIME.minute,
                minute,
            )
            return self

        def set_month(self, month: int) -> "CmsDateTimeDescription.Builder":
            self.add(
                # https://www.w3.org/TR/owl-time/#time:month
                # https://www.w3.org/TR/xmlschema11-2/#gMonth
                TIME.month,
                Literal("--" + str(month).zfill(2), datatype=XSD.gMonth),
            )
            return self

        def set_second(self, second: int) -> "CmsDateTimeDescription.Builder":
            self.add(
                # https://www.w3.org/TR/owl-time/#time:second
                TIME.second,
                Literal(second, datatype=XSD.decimal),
            )
            return self

        def set_year(self, year: int) -> "CmsDateTimeDescription.Builder":
            self.add(
                # https://www.w3.org/TR/owl-time/#time:year
                # https://www.w3.org/TR/xmlschema11-2/#gYear
                TIME.year,
                Literal(str(year), datatype=XSD.gYear),
            )
            return self

    @classmethod
    def builder(cls):
        return cls.Builder(Graph().resource(BNode()))

    @classmethod
    def from_date(cls, date: datetime.date) -> "CmsDateTimeDescription":
        return (
            cls.builder()
            .set_day(date.day)
            .set_month(date.month)
            .set_year(date.year)
            .build()
        )
