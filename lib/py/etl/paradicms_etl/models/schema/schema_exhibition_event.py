from typing import Optional

from rdflib import URIRef, Graph

from paradicms_etl.models.schema.schema_event import SchemaEvent
from paradicms_etl.utils.uuid_urn import uuid_urn


class SchemaExhibitionEvent(
    SchemaEvent,
):
    class Builder(SchemaEvent.Builder):
        def build(self) -> "SchemaExhibitionEvent":
            return SchemaExhibitionEvent(self._resource)

    @classmethod
    def builder(cls, *, uri: Optional[URIRef] = None) -> Builder:
        return cls.Builder(Graph().resource(uri if uri is not None else uuid_urn()))
