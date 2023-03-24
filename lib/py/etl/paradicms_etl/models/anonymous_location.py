from rdflib import RDF, BNode, RDFS
from rdflib.resource import Resource

from paradicms_etl.models.location import Location
from paradicms_etl.models.resource_backed_model import ResourceBackedModel
from paradicms_etl.namespaces import CMS, WGS
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class AnonymousLocation(ResourceBackedModel, Location):
    class Builder(ResourceBackedModel.Builder):
        def __init__(self):
            ResourceBackedModel.Builder.__init__(self, BNode())

        def build(self):
            return AnonymousLocation(self._resource)

        def set_label(self, label: str) -> "AnonymousLocation.Builder":
            self.set(RDFS.label, label)
            return self

        def set_lat(self, lat: float) -> "AnonymousLocation.Builder":
            self.set(WGS.lat, lat)
            return self

        def set_long(self, long: float) -> "AnonymousLocation.Builder":
            self.set(WGS.long, long)
            return self

    def __init__(self, resource: Resource):
        ResourceBackedModel.__init__(self, resource)
        resource.add(RDF.type, CMS.Location)

    @classmethod
    def builder(cls) -> Builder:
        return cls.Builder()

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            ResourceBackedModel.json_ld_context(), Location._json_ld_context()
        )
