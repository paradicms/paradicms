from typing import Optional

from rdflib import RDFS, XSD, URIRef, Graph, BNode

from paradicms_etl.models.cms.cms_model import CmsModel
from paradicms_etl.models.location import Location
from paradicms_etl.namespaces import WGS
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class CmsLocation(CmsModel, Location):
    class Builder(CmsModel.Builder):
        def build(self):
            return CmsLocation(self._resource)

        def set_label(self, label: str) -> "CmsLocation.Builder":
            self.set(RDFS.label, label)
            return self

        def set_lat(self, lat: float) -> "CmsLocation.Builder":
            self.set(WGS.lat, lat)
            return self

        def set_long(self, long: float) -> "CmsLocation.Builder":
            self.set(WGS.long, long)
            return self

    @classmethod
    def builder(cls, *, uri: Optional[URIRef] = None) -> Builder:
        return cls.Builder(Graph().resource(uri if uri is not None else BNode()))

    @staticmethod
    def json_ld_context():
        return safe_dict_update(
            CmsModel.json_ld_context(),
            {
                "label": {"@id": str(RDFS.label)},
                "lat": {"@id": str(WGS.lat), "@type": str(XSD.decimal)},
                "long": {"@id": str(WGS.long), "@type": str(XSD.decimal)},
            },
        )
