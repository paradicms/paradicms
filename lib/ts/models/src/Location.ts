import {Model} from "./Model";
import {wgs} from "@paradicms/vocabularies";
import {parseFloatOrNull, requireNonNull} from "@paradicms/utilities";

export class Location extends Model {
  get lat(): number {
    return requireNonNull(
      this.findAndMapObject(wgs.lat, term =>
        term.termType == "Literal" ? parseFloatOrNull(term.value) : null
      )
    );
  }

  get long(): number {
    return requireNonNull(
      this.findAndMapObject(wgs.long, term =>
        term.termType == "Literal" ? parseFloatOrNull(term.value) : null
      )
    );
  }
}
