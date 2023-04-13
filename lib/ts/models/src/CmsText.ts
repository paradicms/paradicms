import {Mixin} from "ts-mixer";
import {rdf} from "@paradicms/vocabularies";
import {requireNonNull} from "@paradicms/utilities";
import {CmsRightsMixin} from "./CmsRightsMixin";
import {ResourceBackedModel} from "./ResourceBackedModel";

export class CmsText extends Mixin(ResourceBackedModel, CmsRightsMixin) {
  override toString() {
    return this.value;
  }

  get value(): string {
    return requireNonNull(
      this.findAndMapObject(rdf.value, this.mapStringObject)
    );
  }
}
