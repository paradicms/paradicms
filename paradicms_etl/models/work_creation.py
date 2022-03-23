from typing import Union, Tuple, Optional

from rdflib import URIRef, DCTERMS

from paradicms_etl.models.date_time_description import DateTimeDescription
from paradicms_etl.models.location import Location
from paradicms_etl.models.text import Text
from paradicms_etl.models.work_event import WorkEvent
from paradicms_etl.namespaces import VRA, CMS
from paradicms_etl.utils.resource_builder import ResourceBuilder


class WorkCreation(WorkEvent):
    def __init__(self, *args, **kwds):
        WorkEvent.__init__(self, *args, **kwds)
        self.creator_uris

    @property
    def creator_uris(self) -> Tuple[URIRef, ...]:
        return self._required_uri_values(DCTERMS.creator)

    @classmethod
    def from_fields(
        cls,
        *,
        uri: URIRef,
        work_uri: URIRef,
        creator_uri: Union[URIRef, Tuple[URIRef, ...]],
        abstract: Union[str, Text, None] = None,
        contributor_uri: Union[URIRef, Tuple[URIRef, ...], None],
        date: Union[DateTimeDescription, str, None] = None,
        earliest_date: Union[DateTimeDescription, str, None] = None,
        latest_date: Union[DateTimeDescription, str, None] = None,
        location: Union[Location, str, None] = None,
        title: Optional[str] = None
    ):
        if date is None and earliest_date is None and latest_date is None:
            raise ValueError("must specify at least onedate")

        return cls(
            ResourceBuilder(uri)
            .add(DCTERMS.abstract, abstract)
            .add(DCTERMS.contributor, contributor_uri)
            .add(DCTERMS.creator, creator_uri)
            .add(DCTERMS.date, date)
            .add(VRA.earliestDate, earliest_date)
            .add(VRA.latestDate, latest_date)
            .add(DCTERMS.spatial, location)
            .add(DCTERMS.title, title)
            .add(CMS.work, work_uri)
            .build()
        )
