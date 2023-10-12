from rdflib import SDO, XSD, Graph, URIRef

from paradicms_etl.models.date_time_union import DateTimeUnion
from paradicms_etl.models.event import Event
from paradicms_etl.models.schema.schema_model import SchemaModel
from paradicms_etl.utils.safe_dict_update import safe_dict_update
from paradicms_etl.utils.uuid_urn import uuid_urn


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
    def builder(cls, *, uri: URIRef | None = None) -> Builder:
        return cls.Builder(Graph().resource(uri if uri is not None else uuid_urn()))

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            SchemaModel.json_ld_context(),
            {
                "contributor": {
                    "@id": str(SDO.contributor),
                    "@type": "@id",
                },
                "contributorLiteral": {
                    "@id": str(SDO.contributor),
                },
                "endDate": {
                    "@id": str(SDO.endDate),
                    "@type": str(XSD.dateTime),
                },
                "location": {"@id": str(SDO.location), "@type": "@id"},
                "organizer": {
                    "@id": str(SDO.organizer),
                    "@type": "@id",
                },
                "organizerLiteral": {
                    "@id": str(SDO.organizer),
                },
                "startDate": {
                    "@id": str(SDO.startDate),
                    "@type": str(XSD.dateTime),
                },
            },
        )
