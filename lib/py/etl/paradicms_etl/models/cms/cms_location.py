from abc import ABC

from paradicms_etl.model import Model
from paradicms_etl.namespaces import WGS
from rdflib import RDFS, XSD


class Location(Model, ABC):
    """
    Abstract base class for spatial locations with a latitude and longitude.
    """

    @staticmethod
    def _json_ld_context():
        return {
            "label": {"@id": str(RDFS.label)},
            "lat": {"@id": str(WGS.lat), "@type": str(XSD.decimal)},
            "long": {"@id": str(WGS.long), "@type": str(XSD.decimal)},
        }
