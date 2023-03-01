import {Model} from "./Model";
import {wgs} from "@paradicms/vocabularies";
import {requireNonNull} from "@paradicms/utilities";

export class Location extends Model {
  get lat(): number {
    return requireNonNull(this.findAndMapObject(wgs.lat, this.mapFloatObject));
  }

  get long(): number {
    return requireNonNull(this.findAndMapObject(wgs.long, this.mapFloatObject));
  }
}
