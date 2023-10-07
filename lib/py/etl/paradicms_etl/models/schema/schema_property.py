from __future__ import annotations

from rdflib import SDO, XSD, Graph, URIRef

from paradicms_etl.models.property import Property
from paradicms_etl.models.schema.schema_model import SchemaModel
from paradicms_etl.namespaces import CMS
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class SchemaProperty(SchemaModel, Property):
    """
    Schema.org implementation of the Property interface using schema:Property properties.
    """

    class Builder(SchemaModel.Builder):
        def build(self) -> "SchemaProperty":
            return SchemaProperty(self._resource)

        def set_filterable(
            self, filterable: bool  # noqa: FBT001
        ) -> SchemaProperty.Builder:
            self.set(CMS.propertyFilterable, filterable)
            return self

        def set_order(self, order: int) -> SchemaProperty.Builder:
            self.set(CMS.propertyOrder, order)
            return self

        def set_range(self, range_: URIRef) -> SchemaProperty.Builder:
            self.set(SDO.rangeIncludes, range_)
            return self

        def set_searchable(
            self, searchable: bool  # noqa: FBT001
        ) -> SchemaProperty.Builder:
            self.set(CMS.propertySearchable, searchable)
            return self

    def __init__(self, *args, **kwds):
        SchemaModel.__init__(self, *args, **kwds)
        self.label

    @classmethod
    def builder(cls, *, name: str, uri: URIRef) -> Builder:
        builder = cls.Builder(Graph().resource(uri))
        builder.add(SDO.name, name)
        return builder

    @property
    def filterable(self) -> bool | None:
        return self._optional_value(CMS.propertyFilterable, self._map_term_to_bool)

    @classmethod
    def from_property(cls, property_: Property) -> SchemaProperty:
        if isinstance(property_, SchemaProperty):
            return property_
        builder = cls.builder(name=property_.label, uri=property_.uri)
        if property_.filterable is not None:
            builder.set_filterable(property_.filterable)
        if property_.order is not None:
            builder.set_order(property_.order)
        if property_.range is not None:
            builder.set_range(property_.range)
        if property_.searchable is not None:
            builder.set_searchable(property_.searchable)
        return builder.build()

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            SchemaModel.json_ld_context(),
            {
                "filterable": {
                    "@id": str(CMS.propertyFilterable),
                    "@type": str(XSD.boolean),
                },
                "order": {"@id": str(CMS.propertyOrder)},
                "range": {"@id": str(SDO.rangeIncludes), "@type": "@id"},
                "searchable": {
                    "@id": str(CMS.propertySearchable),
                    "@type": str(XSD.boolean),
                },
            },
        )

    @property
    def label(self) -> str:
        return self._required_label

    @property
    def order(self) -> int | None:
        return self._map_term_to_int(CMS.propertyOrder, self._map_term_to_int)  # type: ignore

    @property
    def range(self) -> URIRef | None:  # noqa: A003
        return self._optional_value(SDO.rangeIncludes, self._map_term_to_uri)

    @property
    def searchable(self) -> bool | None:
        return self._optional_value(CMS.propertySearchable, self._map_term_to_bool)
