import {Model} from "./Model";
import {wgs} from "@paradicms/vocabularies";
import {requireDefined} from "@paradicms/rdf";

export class Location extends Model {
  get lat(): number {
    return parseFloat(
      requireDefined(this.getObjects(wgs.lat).find(term => term.termType)).value
    );
  }

  get long(): number {
    return parseFloat(
      requireDefined(this.getObjects(wgs.long).find(term => term.termType))
        .value
    );
  }
}
