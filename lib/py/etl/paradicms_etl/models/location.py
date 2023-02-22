from typing import Optional

from rdflib import URIRef, BNode, RDF, XSD
from rdflib.resource import Resource

from paradicms_etl.models.resource_backed_model import ResourceBackedModel
from paradicms_etl.namespaces import CMS
from paradicms_etl.namespaces.wgs import WGS
from paradicms_etl.utils.resource_builder import ResourceBuilder
from paradicms_etl.utils.safe_dict_update import safe_dict_update


class Location(ResourceBackedModel):
    def __init__(self, resource: Resource):
        resource.add(RDF.type, CMS[self.__class__.__name__])
        ResourceBackedModel.__init__(self, resource)

    @classmethod
    def from_fields(
        cls,
        *,
        lat: Optional[float] = None,
        long: Optional[float] = None,
        uri: Optional[URIRef] = None
    ):
        if uri is not None:
            raise NotImplementedError("no support in the GUI for named Locations")
        return cls(
            ResourceBuilder(uri if uri is not None else BNode())
            .add(WGS.lat, lat)
            .add(WGS.long, long)
            .build()
        )

    @classmethod
    def json_ld_context(cls):
        return safe_dict_update(
            ResourceBackedModel.json_ld_context(),
            {
                "lat": {"@id": str(WGS.lat), "@type": str(XSD.decimal)},
                "long": {"@id": str(WGS.long), "@type": str(XSD.decimal)},
            },
        )

    @property
    def uri(self) -> Optional[URIRef]:
        return (
            self._resource.identifier
            if isinstance(self._resource.identifier, URIRef)
            else None
        )
