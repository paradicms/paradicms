from typing import Optional

from rdflib import URIRef, SDO, Graph, XSD

from paradicms_etl.models.property import Property
from paradicms_etl.models.schema.schema_named_model import SchemaNamedModel
from paradicms_etl.namespaces import CMS
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class SchemaProperty(SchemaNamedModel, Property):
    """
    Schema.org implementation of the Property interface using schema:Property properties.
    """

    class Builder(SchemaNamedModel.Builder):
        def build(self) -> "SchemaProperty":
            return SchemaProperty(self._resource)

        def set_filterable(self, filterable: bool) -> "SchemaProperty.Builder":
            self.set(CMS.propertyFilterable, filterable)
            return self

        def set_order(self, order: int) -> "SchemaProperty.Builder":
            self.set(CMS.propertyOrder, order)
            return self

        def set_range(self, range_: URIRef) -> "SchemaProperty.Builder":
            self.set(SDO.rangeIncludes, range_)
            return self

        def set_searchable(self, searchable: bool) -> "SchemaProperty.Builder":
            self.set(CMS.propertySearchable, searchable)
            return self

    def __init__(self, *args, **kwds):
        SchemaNamedModel.__init__(self, *args, **kwds)
        self.name

    @classmethod
    def builder(cls, *, name: str, uri: URIRef):
        builder = cls.Builder(Graph().resource(uri))
        builder.add(SDO.name, name)
        return builder

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            SchemaNamedModel.json_ld_context(),
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
        return self.name

    @property
    def name(self) -> str:
        return self._required_name

    @property
    def range(self) -> Optional[URIRef]:
        return self._optional_value(SDO.rangeIncludes, self._map_uri_value)

    @property
    def uri(self) -> URIRef:
        return super().uri