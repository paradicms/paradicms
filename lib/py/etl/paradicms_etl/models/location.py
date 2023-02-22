from abc import ABC
from typing import Optional, Any

from rdflib import RDFS, XSD

from paradicms_etl.model import Model
from paradicms_etl.namespaces import WGS
from paradicms_etl.utils.resource_builder import ResourceBuilder


class Location(Model, ABC):
    """
    Abstract base class for spatial locations with a latitude and longitude.
    """

    @staticmethod
    def _from_fields(
        cls: Any,
        *,
        resource_builder: ResourceBuilder,
        label: Optional[str] = None,
        lat: Optional[float] = None,
        long: Optional[float] = None
    ) -> Any:
        return cls(
            resource_builder.add(RDFS.label, label)
            .add(WGS.lat, lat)
            .add(WGS.long, long)
            .build()
        )

    @staticmethod
    def _json_ld_context():
        return {
            "label": {"@id": str(RDFS.label)},
            "lat": {"@id": str(WGS.lat), "@type": str(XSD.decimal)},
            "long": {"@id": str(WGS.long), "@type": str(XSD.decimal)},
        }
