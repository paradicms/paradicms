import {requireNonNull} from "@paradicms/utilities";
import {wgs} from "@paradicms/vocabularies";
import {NamedLocation} from "../NamedLocation";
import {ResourceBackedNamedModel} from "../ResourceBackedNamedModel";

export class CmsNamedLocation extends ResourceBackedNamedModel
  implements NamedLocation {
  get lat(): number {
    return requireNonNull(this.findAndMapObject(wgs.lat, this.mapFloatObject));
  }

  get long(): number {
    return requireNonNull(this.findAndMapObject(wgs.long, this.mapFloatObject));
  }
}
