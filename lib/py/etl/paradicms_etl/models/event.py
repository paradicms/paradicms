from typing import Union, Optional

from rdflib import RDF, DCTERMS
from rdflib.resource import Resource

from paradicms_etl.models.date_time_union import DateTimeUnion
from paradicms_etl.models.location import Location
from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.models.text import Text
from paradicms_etl.namespaces import CMS, VRA
from paradicms_etl.utils.resource_builder import ResourceBuilder
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class Event(ResourceBackedNamedModel):
    LABEL_PROPERTY = DCTERMS.title

    def __init__(self, resource: Resource):
        resource.add(RDF.type, CMS.Event)
        ResourceBackedNamedModel.__init__(self, resource)

    @staticmethod
    def _event_from_fields(
        *,
        resource_builder: ResourceBuilder,
        abstract: Union[str, Text, None] = None,
        date: Optional[DateTimeUnion] = None,
        end_date: Optional[DateTimeUnion] = None,
        location: Union[Location, str, None] = None,
        start_date: Optional[DateTimeUnion] = None,
        title: Optional[str] = None
    ) -> ResourceBuilder:
        if date is None and start_date is None and end_date is None:
            raise ValueError("must specify at least one date")

        return (
            resource_builder.add(DCTERMS.abstract, abstract)
            .add(DCTERMS.date, date)
            .add(VRA.startDate, start_date)
            .add(VRA.endDate, end_date)
            .add(DCTERMS.spatial, location)
            .add(DCTERMS.title, title)
        )

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            ResourceBackedNamedModel.json_ld_context(),
            {
                "abstract": {"@id": str(DCTERMS.abstract)},
                "date": {"@id": str(DCTERMS.creator)},
                "startDate": {"@id": str(VRA.startDate)},
                "endDate": {"@id": str(VRA.endDate)},
                "spatial": {"@id": str(DCTERMS.spatial), "@type": "@id"},
                "title": {"@id": str(DCTERMS.title)},
            },
        )
