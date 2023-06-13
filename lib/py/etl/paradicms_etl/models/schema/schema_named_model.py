from abc import abstractmethod

from rdflib import URIRef

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

    @abstractmethod
    @property
    def uri(self) -> URIRef:
        pass
