import {requireNonNull} from "@paradicms/utilities";
import {wgs} from "@paradicms/vocabularies";
import {Location} from "../Location";
import {ResourceBackedModel} from "../ResourceBackedModel";

export class CmsLocation extends ResourceBackedModel implements Location {
  get lat(): number {
    return requireNonNull(this.findAndMapObject(wgs.lat, this.mapFloatObject));
  }

  get long(): number {
    return requireNonNull(this.findAndMapObject(wgs.long, this.mapFloatObject));
  }
}
