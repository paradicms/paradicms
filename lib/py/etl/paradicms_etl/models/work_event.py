from typing import Union, Optional

from rdflib import RDF, URIRef
from rdflib.resource import Resource

from paradicms_etl.models.date_time_union import DateTimeUnion
from paradicms_etl.models.event import Event
from paradicms_etl.models.location import Location
from paradicms_etl.models.text import Text
from paradicms_etl.namespaces import CMS
from paradicms_etl.utils.resource_builder import ResourceBuilder
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class WorkEvent(Event):
    def __init__(self, resource: Resource):
        resource.add(RDF.type, CMS.WorkEvent)
        Event.__init__(self, resource)
        self.work_uri

    @classmethod
    def from_fields(
        cls,
        *,
        uri: URIRef,
        work_uri: URIRef,
        description: Union[str, Text, None] = None,
        date: Optional[DateTimeUnion] = None,
        end_date: Optional[DateTimeUnion] = None,
        location: Union[Location, str, None] = None,
        start_date: Optional[DateTimeUnion] = None,
        title: Optional[str] = None,
    ):
        return cls(
            WorkEvent._from_fields(
                description=description,
                date=date,
                end_date=end_date,
                location=location,
                resource_builder=ResourceBuilder(uri),
                start_date=start_date,
                title=title,
                work_uri=work_uri,
            ).build()
        )

    @staticmethod
    def _from_fields(  # type: ignore[override]
        *,
        description: Union[str, Text, None],
        date: Optional[DateTimeUnion],
        end_date: Optional[DateTimeUnion],
        location: Union[Location, str, None],
        resource_builder: ResourceBuilder,
        start_date: Optional[DateTimeUnion],
        title: Optional[str],
        work_uri: URIRef,
    ) -> ResourceBuilder:
        return Event._from_fields(
            description=description,
            date=date,
            end_date=end_date,
            location=location,
            resource_builder=resource_builder.add(CMS.work, work_uri),
            start_date=start_date,
            title=title,
        )

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            Event.json_ld_context(),
            {
                "work": {"@id": str(CMS.work), "@type": "@id"},
            },
        )

    @property
    def work_uri(self) -> URIRef:
        return self._required_uri_value(CMS.work)
