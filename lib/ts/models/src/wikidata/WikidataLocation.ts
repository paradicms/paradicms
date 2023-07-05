import {WikidataModel} from "./WikidataModel";
import {Location} from "../Location";
import {Point} from "../Point";
import {geo, wdt} from "@paradicms/vocabularies";
import {wktToGeoJSON} from "@terraformer/wkt";
import log from "loglevel";

export class WikidataLocation extends WikidataModel implements Location {
  get centroid(): Point | null {
    return this.findAndMapStatementValue(wdt["P625"], term => {
      if (term.termType !== "Literal") {
        log.debug("wdt:P625 points to non-Literal");
        return null;
      }
      if (!term.datatype.equals(geo.wktLiteral)) {
        log.debug("wdt:P625 points to non-geo:wktLiteral");
        return null;
      }
      const geoJson = wktToGeoJSON(term.value);
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
    });
  }
}
