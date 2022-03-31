from typing import Optional

from rdflib import URIRef, BNode, RDF

from paradicms_etl.model import Model
from paradicms_etl.namespaces import CMS
from paradicms_etl.namespaces.wgs import WGS
from paradicms_etl.utils.resource_builder import ResourceBuilder


class Location(Model):
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
            .add(RDF.type, CMS[cls.__name__])
            .add(WGS.lat, lat)
            .add(WGS.long, long)
            .build()
        )

    @property
    def uri(self) -> Optional[URIRef]:
        return (
            self._resource.identifier
            if isinstance(self._resource.identifier, URIRef)
            else None
        )
