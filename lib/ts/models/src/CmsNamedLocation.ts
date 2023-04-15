import {wgs} from "@paradicms/vocabularies";
import {requireNonNull} from "@paradicms/utilities";
import {ResourceBackedNamedModel} from "ResourceBackedNamedModel";
import {NamedLocation} from "NamedLocation";

export class CmsNamedLocation extends ResourceBackedNamedModel
  implements NamedLocation {
  get lat(): number {
    return requireNonNull(this.findAndMapObject(wgs.lat, this.mapFloatObject));
  }

  get long(): number {
    return requireNonNull(this.findAndMapObject(wgs.long, this.mapFloatObject));
  }
}
