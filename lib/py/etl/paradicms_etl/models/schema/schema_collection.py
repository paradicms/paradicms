from typing import Collection, Union

from rdflib import URIRef, Graph, SDO

from paradicms_etl.models.schema.schema_named_model import SchemaNamedModel
from paradicms_etl.models.work import Work
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class SchemaCollection(SchemaNamedModel, Collection):
    class Builder(SchemaNamedModel.Builder):
        def add_part(self, part: Union[URIRef, Work]) -> "SchemaCollection.Builder":
            self.add(SDO.hasPart, part)
            return self

        def build(self):
            return SchemaCollection(self._resource)

    @classmethod
    def builder(cls, *, name: str, uri: URIRef) -> Builder:
        builder = cls.Builder(Graph().resource(uri))
        builder.set(SDO.name, name)
        return builder

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            SchemaNamedModel.json_ld_context(),
            {"hasPart": {"@id": str(SDO.hasPart), "@type": "@id"}},
        )

    @property
    def uri(self) -> URIRef:
        return super().uri
