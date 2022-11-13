import {Model} from "./Model";
import {requireDefined} from "./requireDefined";
import {WGS} from "@paradicms/vocabularies";

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
