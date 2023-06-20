from typing import Union, Tuple

from rdflib import URIRef, SDO, Graph
from rdflib.resource import Resource

from paradicms_etl.models.schema.schema_creative_work_mixin import (
    SchemaCreativeWorkMixin,
)
from paradicms_etl.models.schema.schema_named_model import SchemaNamedModel
from paradicms_etl.models.text import Text
from paradicms_etl.models.work import Work
from paradicms_etl.models.work_event import WorkEvent
from paradicms_etl.namespaces import CMS
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class SchemaCreativeWork(SchemaNamedModel, SchemaCreativeWorkMixin, Work):
    class Builder(
        SchemaNamedModel.Builder, SchemaCreativeWorkMixin.Builder, Work.Builder
    ):
        def add_event(self, event: Union[WorkEvent, URIRef]):
            self.add(CMS.event, event)
            return self

        def build(self) -> "SchemaCreativeWork":
            return SchemaCreativeWork(self._resource)

    def __init__(self, resource: Resource):
        SchemaNamedModel.__init__(self, resource)
        self.name

    @classmethod
    def builder(cls, *, name: str, uri: URIRef) -> Builder:
        builder = cls.Builder(Graph().resource(uri))
        builder.set(SDO.name, name)
        return builder

    @property
    def description(self) -> Union[str, Text, None]:
        return SchemaNamedModel.description.fget(self)  # type: ignore

    @property
    def event_uris(self) -> Tuple[URIRef, ...]:
        return tuple(self._values(CMS.event, self._map_uri_value))

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            SchemaNamedModel.json_ld_context(),
            SchemaCreativeWorkMixin.json_ld_context(),
            {"event": {"@id": str(CMS.event), "@type": "@id"}},
        )

    @property
    def label(self) -> str:
        return self.name

    @property
    def name(self) -> str:
        return self._required_name

    def replacer(self) -> Builder:
        return self.Builder(self._resource)

    @property
    def uri(self) -> URIRef:
        return super().uri
