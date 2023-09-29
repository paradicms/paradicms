import { mapTermToNumber } from "@paradicms/rdf";
import { geo, rdf, wdt, wikibase } from "@paradicms/vocabularies";
import { wktToGeoJSON } from "@terraformer/wkt";
import log from "loglevel";
import { Memoize } from "typescript-memoize";
import { Location } from "../Location";
import { Point } from "../Point";
import { WikidataModel } from "./WikidataModel";

export class WikidataLocation extends WikidataModel implements Location {
  @Memoize()
  get centroid(): Point | null {
    return this.findAndMapStatementValue(wdt["P625"], term => {
      if (term.termType === "Literal") {
        if (!term.datatype.equals(geo.wktLiteral)) {
          log.debug("wdt:P625 points to non-geo:wktLiteral");
          return null;
        }
        const geoJson = wktToGeoJSON(term.value.toUpperCase());
        if (geoJson.type !== "Point") {
          log.debug("wdt:P625 points to non-WKT Point");
          return null;
        }
        if (geoJson.coordinates.length !== 2) {
          log.debug("wdt:P625 WKT Point does not have 2 coordinates");
          return null;
        }
        return {
          latitude: geoJson.coordinates[1],
          longitude: geoJson.coordinates[0],
        };
      } else if (term.termType === "NamedNode") {
        // <http://www.wikidata.org/value/85f7a5d686b35a1bddfe12e66a844e39> a wikibase:GlobecoordinateValue ;
        // wikibase:geoGlobe wd:Q2 ;
        // wikibase:geoLatitude 4.077945e+01 ;
        // wikibase:geoLongitude -7.396325e+01 ;
        // wikibase:geoPrecision 2.77778e-04 .
        let latitude: number | null = null,
          longitude: number | null = null;
        for (const valueQuad of this.dataset.match(
          term,
          null,
          null,
          this.graph
        )) {
          if (valueQuad.predicate.equals(rdf.type)) {
            if (!valueQuad.object.equals(wikibase.GlobecoordinateValue)) {
              return null;
            }
          } else if (valueQuad.predicate.equals(wikibase.geoLatitude)) {
            latitude = mapTermToNumber(valueQuad.object);
          } else if (valueQuad.predicate.equals(wikibase.geoLongitude)) {
            longitude = mapTermToNumber(valueQuad.object);
          }
        }
        if (latitude !== null && longitude !== null) {
          return {
            latitude,
            longitude,
          };
        } else {
          return null;
        }
      } else {
        return null;
      }
    });
  }

  override preMemoize(): void {
    super.preMemoize();
    this.centroid;
  }
}
