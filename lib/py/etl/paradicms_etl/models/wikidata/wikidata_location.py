import logging

import pygeoconv.errors
from rdflib import RDF, Literal, URIRef
from rdflib.resource import Resource

from paradicms_etl.models.location import Location
from paradicms_etl.models.wikibase.wikibase_globecoordinate_value import (
    WikibaseGlobecoordinateValue,
)
from paradicms_etl.models.wikidata.wikidata_model import WikidataModel
from paradicms_etl.namespaces.wdt import WDT

logger = logging.getLogger(__name__)


class WikidataLocation(WikidataModel, Location):
    __WKT_LITERAL_DATATYPE_URI = URIRef(
        "http://www.opengis.net/ont/geosparql#wktLiteral"
    )

    @property
    def centroid(self) -> Location.Centroid | None:
        # Check P625 (coordinate location)
        coordinate_location_value: Literal | Resource | None = self._optional_value(
            WDT["P625"]
        )

        if coordinate_location_value is None:
            # Chase P276 (location) from this resource to another resource to see if the latter has a centroid
            for location_value in self._values(WDT["P276"]):
                if isinstance(location_value, Resource):
                    centroid = WikidataLocation(location_value).centroid
                    if centroid is not None:
                        return centroid

            return None

        if isinstance(coordinate_location_value, Literal):
            # A WKT Literal
            if coordinate_location_value.datatype != self.__WKT_LITERAL_DATATYPE_URI:
                logger.warning(
                    "Wikidata P625 literal is not a wktLiteral: %s",
                    coordinate_location_value,
                )
                return None
            try:
                geojson = pygeoconv.wkt_to_geojson(
                    str(coordinate_location_value).upper()
                )
            except pygeoconv.errors.WktParserError as e:
                logger.warning(
                    "error parsing WKT literal: %s",
                    coordinate_location_value,
                    exc_info=True,
                )
                return None

            if geojson.get("type") != "Point":
                logger.warning(
                    "WKT literal is not a POINT: %s", coordinate_location_value
                )
                return None

            geojson_coordinates = geojson.get("coordinates", [])
            if (
                not isinstance(geojson_coordinates, list)
                or len(geojson_coordinates) != 2
                or not all(
                    isinstance(coordinate, float) for coordinate in geojson_coordinates
                )
            ):
                logger.warning(
                    "WKT literal does not have expected coordinates: %s",
                    coordinate_location_value,
                )
                return None

            return Location.Centroid(
                latitude=geojson_coordinates[1], longitude=geojson_coordinates[0]
            )

        if isinstance(coordinate_location_value, Resource):
            # A wikibase:GlobeCoordinateValue
            coordinate_location_value_type = coordinate_location_value.value(RDF.type)
            if (
                not isinstance(coordinate_location_value_type, Resource)
                or coordinate_location_value_type.identifier
                != WikibaseGlobecoordinateValue.rdf_type_uri()
            ):
                return None

            globe_coordinate_value: WikibaseGlobecoordinateValue = (
                WikibaseGlobecoordinateValue.from_rdf(coordinate_location_value_type)
            )  # type: ignore
            return Location.Centroid(
                latitude=globe_coordinate_value.geo_latitude,
                longitude=globe_coordinate_value.geo_longitude,
            )

        raise TypeError(type(coordinate_location_value))
