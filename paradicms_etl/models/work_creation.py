from typing import Union, Tuple

from rdflib import URIRef, DCTERMS

from paradicms_etl.models.date_time_description import DateTimeDescription
from paradicms_etl.models.location import Location
from paradicms_etl.models.work_event import WorkEvent
from paradicms_etl.namespaces import PROV
from paradicms_etl.utils.resource_builder import ResourceBuilder


class WorkCreation(WorkEvent):
    @classmethod
    def from_fields(
        cls,
        *,
        creator_uri: Union[URIRef, Tuple[URIRef, ...]],
        uri: URIRef,
        work_uri: URIRef,
        spatial: Union[Location, None] = None,
        temporal: Union[DateTimeDescription, str] = None
    ):
        return cls(
            ResourceBuilder.create(uri)
            .add(DCTERMS.creator, creator_uri)
            .add(DCTERMS.spatial, spatial)
            .add(DCTERMS.temporal, temporal)
            .add(PROV.generated, work_uri)
            .build()
        )
