from paradicms_etl.models.location import Location
from paradicms_etl.models.resource_backed_named_model import ResourceBackedNamedModel
from paradicms_etl.namespaces import CMS
from paradicms_etl.utils.safe_dict_update import safe_dict_update
from rdflib import RDF


class NamedLocation(ResourceBackedNamedModel, Location):
    class Builder(ResourceBackedNamedModel.Builder):
        def __init__(self, *, uri: URIRef):
            ResourceBackedNamedModel.Builder.__init__(self, uri)

        def build(self):
            return AnonymousLocation(self._resource)

        def set_label(self, label: str) -> "Builder":
            self.set(RDFS.label, label)
            return self

        def set_lat(self, lat: float) -> "Builder":
            self.set(WGS.lat, lat)
            return self

        def set_long(self, long: float) -> "Builder":
            self.set(WGS.long, long)
            return self

    def __init__(self, *args, **kwds):
        ResourceBackedNamedModel.__init__(self, *args, **kwds)
        self._resource.add(RDF.type, CMS.Location)

    @classmethod
    def builder(cls, *, uri: URIRef) -> Builder:
        return cls.Builder(uri=uri)

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            ResourceBackedNamedModel.json_ld_context(), Location._json_ld_context()
        )
