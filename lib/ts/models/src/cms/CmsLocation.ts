import {requireNonNull} from "@paradicms/utilities";
import {wgs} from "@paradicms/vocabularies";
import {Mixin} from "ts-mixer";
import {Location} from "../Location";
import {CmsModel} from "./CmsModel";
import {mapTermToNumber} from "@paradicms/rdf";

export class CmsLocation extends Mixin(CmsModel) implements Location {
  get lat(): number {
    return requireNonNull(this.findAndMapObject(wgs.lat, mapTermToNumber));
  }

  get long(): number {
    return requireNonNull(this.findAndMapObject(wgs.long, mapTermToNumber));
  }
}
