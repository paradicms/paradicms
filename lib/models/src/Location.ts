import {Model} from "./Model";
import {WGS} from "./vocabularies/WGS";
import {requireDefined} from "./requireDefined";

export class Location extends Model {
  get lat(): number {
    return parseFloat(
      requireDefined(this.propertyObjects(WGS.lat).find(term => term.termType))
        .value
    );
  }

  get long(): number {
    return parseFloat(
      requireDefined(this.propertyObjects(WGS.long).find(term => term.termType))
        .value
    );
  }
}
