from rdflib import RDFS, XSD

from paradicms_etl.models.location import Location
from paradicms_etl.namespaces import WGS


class CmsLocation(Location):
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
