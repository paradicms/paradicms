import { requireNonNull } from "@paradicms/utilities";
import { rdf } from "@paradicms/vocabularies";
import { Mixin } from "ts-mixer";
import { ResourceBackedModel } from "../ResourceBackedModel";
import { CmsRightsMixin } from "./CmsRightsMixin";

export class CmsText extends Mixin(ResourceBackedModel, CmsRightsMixin) {
  override toString(): string {
    return this.value;
  }

  get value(): string {
    return requireNonNull(
      this.findAndMapObject(rdf.value, this.mapStringObject)
    );
  }
}
