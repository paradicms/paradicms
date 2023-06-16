from typing import Text, Union

from rdflib import URIRef, SDO

from paradicms_etl.models.resource_backed_model_mixin import ResourceBackedModelMixin


class SchemaThingMixin(ResourceBackedModelMixin):
    class Builder(ResourceBackedModelMixin.Builder):
        def add_alternate_name(
            self, alternate_name: Union[str, Text]
        ) -> "SchemaThingMixin.Builder":
            self.add(SDO.alternateName, alternate_name)
            return self

        def add_description(
            self, description: Union[str, Text]
        ) -> "SchemaThingMixin.Builder":
            self.add(SDO.description, description)
            return self

        def add_same_as(self, same_as: URIRef) -> "SchemaThingMixin.Builder":
            self.add(SDO.sameAs, same_as)
            return self

    @classmethod
    def json_ld_context(cls):
        return {
            # Override some Thing properties to enforce types
            "sameAs": {"@id": str(SDO.sameAs), "@type": "@id"},
            "url": {"@id": str(SDO.url), "@type": "@id"},
            "@vocab": str(SDO),
        }
