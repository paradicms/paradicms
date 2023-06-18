from abc import abstractmethod
from typing import Optional

from rdflib import URIRef, SDO

from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.models.schema.schema_thing_mixin import SchemaThingMixin
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class SchemaNamedModel(ResourceBackedNamedModel, SchemaThingMixin):
    """
    Abstract base class for schema.org named models.
    """

    class Builder(ResourceBackedNamedModel.Builder, SchemaThingMixin.Builder):
        pass

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            ResourceBackedNamedModel.json_ld_context(),
            SchemaThingMixin.json_ld_context(),
        )

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        assert cls.__name__.startswith("Schema")
        return getattr(SDO, cls.__name__[len("Schema") :])

    @property
    def label(self) -> Optional[str]:
        return SchemaThingMixin.label.fget(self)

    @property
    @abstractmethod
    def uri(self) -> URIRef:
        return super().uri
