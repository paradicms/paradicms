from rdflib import URIRef

from paradicms_etl.models.location import Location
from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.utils.resource_builder import ResourceBuilder
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class NamedLocation(ResourceBackedNamedModel, Location):
    @classmethod
    def from_fields(cls, *, uri: URIRef, **kwds) -> "NamedLocation":
        return Location._from_fields(cls, resource_builder=ResourceBuilder(uri), **kwds)

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            ResourceBackedNamedModel.json_ld_context(), Location._json_ld_context()
        )
