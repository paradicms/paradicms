from rdflib import RDF, URIRef, RDFS
from rdflib.resource import Resource

from paradicms_etl.models.cms.cms_location import CmsLocation
from paradicms_etl.models.cms.cms_named_model import CmsNamedModel
from paradicms_etl.namespaces import CMS, WGS
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class CmsNamedLocation(CmsNamedModel, CmsLocation):
    class Builder(CmsNamedModel.Builder):
        def __init__(self, *, uri: URIRef):
            CmsNamedModel.Builder.__init__(self, uri)

        def build(self):
            return CmsNamedLocation(self._resource)

        def set_label(self, label: str) -> "CmsNamedLocation.Builder":
            self.set(RDFS.label, label)
            return self

        def set_lat(self, lat: float) -> "CmsNamedLocation.Builder":
            self.set(WGS.lat, lat)
            return self

        def set_long(self, long: float) -> "CmsNamedLocation.Builder":
            self.set(WGS.long, long)
            return self

    def __init__(self, resource: Resource):
        resource.add(RDF.type, CMS.Location)
        CmsNamedModel.__init__(self, resource)

    @classmethod
    def builder(cls, *, uri: URIRef) -> Builder:
        return cls.Builder(uri=uri)

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            CmsNamedModel.json_ld_context(), CmsLocation._json_ld_context()
        )
