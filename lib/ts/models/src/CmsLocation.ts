import {wgs} from "@paradicms/vocabularies";
import {requireNonNull} from "@paradicms/utilities";
import {ResourceBackedModel} from "./ResourceBackedModel";
import {Location} from "./Location";

export class CmsLocation extends ResourceBackedModel implements Location {
  get lat(): number {
    return requireNonNull(this.findAndMapObject(wgs.lat, this.mapFloatObject));
  }

  get long(): number {
    return requireNonNull(this.findAndMapObject(wgs.long, this.mapFloatObject));
  }
}
