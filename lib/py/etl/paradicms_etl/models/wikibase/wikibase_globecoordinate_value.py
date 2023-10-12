from rdflib import URIRef

from paradicms_etl.models.resource_backed_model import ResourceBackedModel
from paradicms_etl.namespaces.wikibase import WIKIBASE


class WikibaseGlobecoordinateValue(ResourceBackedModel):
    # // <http://www.wikidata.org/value/85f7a5d686b35a1bddfe12e66a844e39> a wikibase:GlobecoordinateValue ;
    # // wikibase:geoGlobe wd:Q2 ;
    # // wikibase:geoLatitude 4.077945e+01 ;
    # // wikibase:geoLongitude -7.396325e+01 ;
    # // wikibase:geoPrecision 2.77778e-04 .

    @property
    def geo_latitude(self) -> float:
        return self._required_value(WIKIBASE.geoLatitude, self._map_term_to_float)

    @property
    def geo_longitude(self) -> float:
        return self._required_value(WIKIBASE.geoLongitude, self._map_term_to_float)

    @classmethod
    def rdf_type_uri(cls) -> URIRef:
        return WIKIBASE.GlobecoordinateValue
