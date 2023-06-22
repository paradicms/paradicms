import {requireNonNull} from "@paradicms/utilities";
import {wgs} from "@paradicms/vocabularies";
import {Mixin} from "ts-mixer";
import {Location} from "../Location";
import {CmsModel} from "./CmsModel";

export class CmsLocation extends Mixin(CmsModel) implements Location {
  get lat(): number {
    return requireNonNull(this.findAndMapObject(wgs.lat, this.mapFloatObject));
  }

  get long(): number {
    return requireNonNull(this.findAndMapObject(wgs.long, this.mapFloatObject));
  }
}
