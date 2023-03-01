from typing import Union, Tuple, Optional

from rdflib import URIRef, DCTERMS, RDF
from rdflib.resource import Resource

from paradicms_etl.models.date_time_union import DateTimeUnion
from paradicms_etl.models.location import Location
from paradicms_etl.models.text import Text
from paradicms_etl.models.work_event import WorkEvent
from paradicms_etl.namespaces import CMS
from paradicms_etl.utils.resource_builder import ResourceBuilder
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class WorkCreation(WorkEvent):
    LABEL_PROPERTY = DCTERMS.title

    def __init__(self, resource: Resource):
        resource.add(RDF.type, CMS[self.__class__.__name__])
        WorkEvent.__init__(self, resource)
        self.creator_uris

    @property
    def creator_uris(self) -> Tuple[URIRef, ...]:
        return self._required_uri_values(DCTERMS.creator)

    @classmethod
    def from_fields(
        cls,
        *,
        contributor_uri: Union[URIRef, Tuple[URIRef, ...], None],
        creator_uri: Union[URIRef, Tuple[URIRef, ...]],
        uri: URIRef,
        work_uri: URIRef,
        abstract: Union[str, Text, None] = None,
        date: Optional[DateTimeUnion] = None,
        end_date: Optional[DateTimeUnion] = None,
        location: Union[Location, str, None] = None,
        start_date: Optional[DateTimeUnion] = None,
        title: Optional[str] = None
    ):
        return cls(
            WorkEvent._work_event_from_fields(
                abstract=abstract,
                date=date,
                end_date=end_date,
                location=location,
                resource_builder=ResourceBuilder(uri)
                .add(DCTERMS.contributor, contributor_uri)
                .add(DCTERMS.creator, creator_uri),
                start_date=start_date,
                title=title,
                work_uri=work_uri,
            ).build()
        )

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            WorkEvent.json_ld_context(),
            {
                "contributor": {"@id": str(DCTERMS.contributor), "@type": "@id"},
                "creator": {"@id": str(DCTERMS.creator), "@type": "@id"},
            },
        )
