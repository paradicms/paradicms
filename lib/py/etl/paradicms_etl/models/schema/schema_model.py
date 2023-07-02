from typing import Tuple

from rdflib import URIRef, SDO

from paradicms_etl.models.resource_backed_model import ResourceBackedModel
from paradicms_etl.models.schema.schema_thing_mixin import SchemaThingMixin
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class SchemaModel(ResourceBackedModel, SchemaThingMixin):
    """
    Abstract base class for schema.org anonymous models.
    """

    class Builder(ResourceBackedModel.Builder, SchemaThingMixin.Builder):
        pass

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            ResourceBackedModel.json_ld_context(),
            SchemaThingMixin.json_ld_context(),
        )

    @classmethod
    def label_property_uri(cls) -> URIRef:
        return SDO.name

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        assert cls.__name__.startswith("Schema")
        return getattr(SDO, cls.__name__[len("Schema") :])

    @property
    def same_as_uris(self) -> Tuple[URIRef, ...]:
        return tuple(self._values(SDO.sameAs, self._map_uri_value))
