from __future__ import annotations

from typing import TYPE_CHECKING, Any

from rdflib import SDO, XSD, Graph, URIRef

from paradicms_etl.models.location import Location
from paradicms_etl.models.schema.schema_model import SchemaModel
from paradicms_etl.utils.safe_dict_update import safe_dict_update
from paradicms_etl.utils.uuid_urn import uuid_urn

if TYPE_CHECKING:
    from paradicms_etl.models.schema.schema_postal_address import SchemaPostalAddress


class SchemaPlace(SchemaModel, Location):
    """
    Schema.org implementation of the Location interface using schema:Place properties.
    """

    class Builder(SchemaModel.Builder):
        def build(self) -> SchemaPlace:
            return SchemaPlace(self._resource)

        def set_address(
            self, address: SchemaPostalAddress | str
        ) -> SchemaPlace.Builder:
            self.set(SDO.address, address)
            return self

        def set_centroid(self, centroid: Location.Centroid) -> SchemaPlace.Builder:
            self.set(SDO.latitude, centroid.latitude)
            self.set(SDO.longitude, centroid.longitude)
            return self

    @classmethod
    def builder(cls, *, uri: URIRef | None = None) -> Builder:
        return cls.Builder(Graph().resource(uri if uri is not None else uuid_urn()))

    @property
    def centroid(self) -> Location.Centroid | None:
        latitude = self._optional_value(SDO.latitude, self._map_term_to_float)
        longitude = self._optional_value(SDO.longitude, self._map_term_to_float)
        if latitude is not None and longitude is not None:
            return Location.Centroid(latitude=latitude, longitude=longitude)
        return None

    @classmethod
    def from_location(cls, location: Location) -> SchemaPlace:
        if isinstance(location, SchemaPlace):
            return location

        builder = cls.builder(uri=location.uri)
        if location.centroid is not None:
            builder.set_centroid(location.centroid)
        if location.label is not None:
            builder.set_name(location.label)
        builder.copy_same_as(location)
        return builder.build()

    @classmethod
    def json_ld_context(cls) -> dict[str, Any]:
        return safe_dict_update(
            SchemaModel.json_ld_context(),
            {
                "latitude": {"@id": str(SDO.latitude), "@type": str(XSD.decimal)},
                "longitude": {"@id": str(SDO.longitude), "@type": str(XSD.decimal)},
            },
        )
