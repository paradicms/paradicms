from rdflib import RDF, BNode, RDFS
from rdflib.resource import Resource

from paradicms_etl.models.cms.cms_location import CmsLocation
from paradicms_etl.models.cms.cms_model import CmsModel
from paradicms_etl.namespaces import CMS, WGS
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class CmsAnonymousLocation(CmsModel, CmsLocation):
    class Builder(CmsModel.Builder):
        def __init__(self):
            CmsModel.Builder.__init__(self, BNode())

        def build(self):
            return CmsAnonymousLocation(self._resource)

        def set_label(self, label: str) -> "CmsAnonymousLocation.Builder":
            self.set(RDFS.label, label)
            return self

        def set_lat(self, lat: float) -> "CmsAnonymousLocation.Builder":
            self.set(WGS.lat, lat)
            return self

        def set_long(self, long: float) -> "CmsAnonymousLocation.Builder":
            self.set(WGS.long, long)
            return self

    def __init__(self, resource: Resource):
        resource.add(RDF.type, CMS.Location)
        CmsModel.__init__(self, resource)

    @classmethod
    def builder(cls) -> Builder:
        return cls.Builder()

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            CmsModel.json_ld_context(), CmsLocation._json_ld_context()
        )
