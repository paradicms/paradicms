from typing import Any

from rdflib import SDO, XSD, Graph, URIRef

from paradicms_etl.models.location import Location
from paradicms_etl.models.schema.schema_model import SchemaModel
from paradicms_etl.models.schema.schema_postal_address import SchemaPostalAddress
from paradicms_etl.utils.safe_dict_update import safe_dict_update
from paradicms_etl.utils.uuid_urn import uuid_urn


class SchemaPlace(SchemaModel, Location):
    """
    Schema.org implementation of the Location interface using schema:Place properties.
    """

    class Builder(SchemaModel.Builder):
        def build(self) -> "SchemaPlace":
            return SchemaPlace(self._resource)

        def set_address(
            self, address: SchemaPostalAddress | str
        ) -> "SchemaPlace.Builder":
            self.set(SDO.address, address)
            return self

        def set_latitude(self, latitude: float) -> "SchemaPlace.Builder":
            self.set(SDO.latitude, latitude)
            return self

        def set_longitude(self, longitude: float) -> "SchemaPlace.Builder":
            self.set(SDO.longitude, longitude)
            return self

    @classmethod
    def builder(cls, *, uri: URIRef | None = None) -> Builder:
        return cls.Builder(Graph().resource(uri if uri is not None else uuid_urn()))

    @classmethod
    def json_ld_context(cls) -> dict[str, Any]:
        return safe_dict_update(
            SchemaModel.json_ld_context(),
            {
                "latitude": {"@id": str(SDO.latitude), "@type": str(XSD.decimal)},
                "longitude": {"@id": str(SDO.longitude), "@type": str(XSD.decimal)},
            },
        )
