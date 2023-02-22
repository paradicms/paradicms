from rdflib import RDF, BNode
from rdflib.resource import Resource

from paradicms_etl.models.location import Location
from paradicms_etl.models.resource_backed_model import ResourceBackedModel
from paradicms_etl.namespaces import CMS
from paradicms_etl.utils.resource_builder import ResourceBuilder
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class AnonymousLocation(ResourceBackedModel, Location):
    def __init__(self, resource: Resource):
        resource.add(RDF.type, CMS[Location.__name__])
        ResourceBackedModel.__init__(self, resource)

    @classmethod
    def from_fields(cls, **kwds):
        return Location._from_fields(
            cls, resource_builder=ResourceBuilder(BNode()), **kwds
        )

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            ResourceBackedModel.json_ld_context(), Location._json_ld_context()
        )
