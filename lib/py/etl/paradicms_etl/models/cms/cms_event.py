from typing import Union

from rdflib import RDF, DCTERMS
from rdflib.resource import Resource

from paradicms_etl.models.date_time_union import DateTimeUnion
from paradicms_etl.models.location import Location
from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.models.text import Text
from paradicms_etl.namespaces import CMS, VRA
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class Event(ResourceBackedNamedModel):
    LABEL_PROPERTY = DCTERMS.title

    class Builder(ResourceBackedNamedModel.Builder):
        def set_date(self, date: DateTimeUnion) -> "Event.Builder":
            self.set(DCTERMS.date, date)
            return self

        def set_description(self, description: Union[str, Text]) -> "Event.Builder":
            self.set(DCTERMS.description, description)
            return self

        def set_end_date(self, end_date: DateTimeUnion) -> "Event.Builder":
            self.set(VRA.endDate, end_date)
            return self

        def set_location(self, location: Union[str, Location]) -> "Event.Builder":
            self.set(DCTERMS.spatial, location)
            return self

        def set_start_date(self, start_date: DateTimeUnion) -> "Event.Builder":
            self.set(VRA.startDate, start_date)
            return self

        def set_title(self, title: str) -> "Event.Builder":
            self.set(DCTERMS.title, title)
            return self

    def __init__(self, resource: Resource):
        resource.add(RDF.type, CMS.Event)
        ResourceBackedNamedModel.__init__(self, resource)

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            ResourceBackedNamedModel.json_ld_context(),
            {
                "description": {"@id": str(DCTERMS.description)},
                "date": {"@id": str(DCTERMS.date)},
                "endDate": {"@id": str(VRA.endDate)},
                "spatial": {"@id": str(DCTERMS.spatial), "@type": "@id"},
                "startDate": {"@id": str(VRA.startDate)},
                "title": {"@id": str(DCTERMS.title)},
            },
        )
