from typing import Optional

from rdflib import URIRef, Graph, BNode

from paradicms_etl.models.schema.schema_event import SchemaEvent


class SchemaExhibitionEvent(
    SchemaEvent,
):
    class Builder(SchemaEvent.Builder):
        pass

    @classmethod
    def builder(cls, *, uri: Optional[URIRef] = None) -> Builder:
        return cls.Builder(Graph().resource(uri if uri is not None else BNode()))
