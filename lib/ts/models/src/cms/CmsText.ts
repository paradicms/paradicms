import {requireNonNull} from "@paradicms/utilities";
import {rdf} from "@paradicms/vocabularies";
import {Mixin} from "ts-mixer";
import {CmsRightsMixin} from "./CmsRightsMixin";
import {CmsModel} from "./CmsModel";

export class CmsText extends Mixin(CmsModel, CmsRightsMixin) {
  override toString(): string {
    return this.value;
  }

  get value(): string {
    return requireNonNull(
      this.findAndMapObject(rdf.value, this.mapStringObject)
    );
  }
}


