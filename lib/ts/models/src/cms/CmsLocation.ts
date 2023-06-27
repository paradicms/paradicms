import {requireNonNull} from "@paradicms/utilities";
import {wgs} from "@paradicms/vocabularies";
import {Mixin} from "ts-mixer";
import {Location} from "../Location";
import {CmsModel} from "./CmsModel";
import {mapTermToNumber} from "@paradicms/rdf";
import {Memoize} from "typescript-memoize";

export class CmsLocation extends Mixin(CmsModel) implements Location {
  @Memoize()
  get latitude(): number {
    return requireNonNull(this.findAndMapObject(wgs.lat, mapTermToNumber));
  }

  @Memoize()
  get longitude(): number {
    return requireNonNull(this.findAndMapObject(wgs.long, mapTermToNumber));
  }
}
