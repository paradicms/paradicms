from __future__ import annotations

from typing import TYPE_CHECKING, Any

from rdflib import SDO, Graph, URIRef

from paradicms_etl.models.date_time_union import DateTimeUnion
from paradicms_etl.models.schema.schema_creative_work_mixin import (
    SchemaCreativeWorkMixin,
)
from paradicms_etl.models.schema.schema_model import SchemaModel
from paradicms_etl.models.schema.schema_text_object import SchemaTextObject
from paradicms_etl.models.text import Text
from paradicms_etl.models.work import Work
from paradicms_etl.utils.safe_dict_update import safe_dict_update

if TYPE_CHECKING:
    from rdflib.resource import Resource


class SchemaCreativeWork(SchemaModel, SchemaCreativeWorkMixin, Work):
    """
    Schema.org implementation of the Work interface using schema:CreativeWork properties.

    See note in SchemaCreativeWorkMixin re: why the two are separate.
    """

    class Builder(SchemaModel.Builder, SchemaCreativeWorkMixin.Builder, Work.Builder):
        def build(self) -> SchemaCreativeWork:
            return SchemaCreativeWork(self._resource)

    def __init__(self, resource: Resource):
        SchemaModel.__init__(self, resource)
        self.label  # noqa: B018

    @classmethod
    def builder(cls, *, name: str, uri: URIRef) -> Builder:
        builder = cls.Builder(Graph().resource(uri))
        builder.set(SDO.name, name)
        return builder

    @property
    def created(self) -> DateTimeUnion | None:
        return self._optional_value(SDO.dateCreated, self._map_term_to_date_time_union)  # type: ignore

    @property
    def description(self) -> str | Text | None:
        return self._optional_value(SDO.description, self._map_term_to_str_or_text)  # type: ignore

    @property
    def encoding_format(self) -> str | None:
        return self._optional_value(SDO.encodingFormat, self._map_term_to_str)

    @classmethod
    def from_work(cls, work: Work) -> SchemaCreativeWork:
        if isinstance(work, SchemaCreativeWork):
            return work

        builder = cls.builder(name=work.label, uri=work.uri)

        for contributor in work.contributors:
            builder.add_contributor(contributor)

        if work.created is not None:
            builder.set_date_created(work.created)

        for creator in work.creators:
            builder.add_creator(creator)

        work_description = work.description
        if isinstance(work_description, str):
            builder.set_description(work_description)
        elif isinstance(work_description, Text):
            builder.set_description(SchemaTextObject.from_text(work_description))
        elif work_description is not None:
            raise TypeError(type(work_description))

        builder.copy_images(work)

        if work.modified is not None:
            builder.set_date_modified(work.modified)

        for subject in work.subjects:
            builder.add_about(subject)

        return builder.build()

    @classmethod
    def json_ld_context(cls) -> dict[str, Any]:
        return safe_dict_update(
            SchemaModel.json_ld_context(),
            SchemaCreativeWorkMixin.json_ld_context(),
        )

    @property
    def label(self) -> str:
        return self._required_label

    @property
    def modified(self) -> DateTimeUnion | None:
        return self._optional_value(SDO.dateCreated, self._map_term_to_date_time_union)  # type: ignore

    def replacer(self) -> Builder:
        return self.Builder(self.resource)

    @property
    def spatial(self) -> str | URIRef | None:
        return self._optional_value(SDO.spatial, self._map_term_to_str_or_uri)

    @property
    def subjects(self) -> tuple[str | URIRef, ...]:
        return tuple(self._values(SDO.about, self._map_term_to_str_or_uri))

    @property
    def text(self) -> str | Text | None:
        return self._optional_value(SDO.text, self._map_term_to_str_or_text)  # type: ignore
