from typing import Union, Tuple

from rdflib import URIRef, DCTERMS

from paradicms_etl.models.date_time_description import DateTimeDescription
from paradicms_etl.models.location import Location
from paradicms_etl.models.work_event import WorkEvent
from paradicms_etl.namespaces import VRA, CMS
from paradicms_etl.utils.resource_builder import ResourceBuilder


class WorkCreation(WorkEvent):
    @classmethod
    def from_fields(
        cls,
        *,
        uri: URIRef,
        work_uri: URIRef,
        creator_uri: Union[URIRef, Tuple[URIRef, ...]],
        date: Union[DateTimeDescription, str, None] = None,
        earliest_date: Union[DateTimeDescription, str, None] = None,
        latest_date: Union[DateTimeDescription, str, None] = None,
        location: Union[Location, str, None] = None,
    ):
        return cls(
            ResourceBuilder(uri)
            .add(DCTERMS.creator, creator_uri)
            .add(DCTERMS.date, date)
            .add(VRA.earliestDate, earliest_date)
            .add(VRA.latestDate, latest_date)
            .add(DCTERMS.spatial, location)
            .add(CMS.work, work_uri)
            .build()
        )
