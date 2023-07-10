from typing import Optional

from rdflib import URIRef, Graph, BNode, SDO, XSD

from paradicms_etl.models.date_time_union import DateTimeUnion
from paradicms_etl.models.event import Event
from paradicms_etl.models.schema.schema_model import SchemaModel
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class SchemaEvent(SchemaModel, Event):
    class Builder(SchemaModel.Builder):
        def build(self) -> "SchemaEvent":
            return SchemaEvent(self._resource)

        def set_end_date(self, end_date: DateTimeUnion) -> "SchemaEvent.Builder":
            self.set(SDO.endDate, end_date)
            return self

        def set_start_date(self, start_date: DateTimeUnion) -> "SchemaEvent.Builder":
            self.set(SDO.startDate, start_date)
            return self

    @classmethod
    def builder(cls, *, uri: Optional[URIRef] = None) -> Builder:
        return cls.Builder(Graph().resource(uri if uri is not None else BNode()))

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            SchemaModel.json_ld_context(),
            {
                "endDate": {
                    "@id": str(SDO.endDate),
                    "@type": str(XSD.dateTime),
                },
                "startDate": {
                    "@id": str(SDO.startDate),
                    "@type": str(XSD.dateTime),
                },
            },
        )