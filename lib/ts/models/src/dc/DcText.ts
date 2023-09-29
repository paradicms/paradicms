import { mapTermToString } from "@paradicms/rdf";
import { requireNonNull } from "@paradicms/utilities";
import { rdf } from "@paradicms/vocabularies";
import { Mixin } from "ts-mixer";
import { Memoize } from "typescript-memoize";
import { ResourceBackedModel } from "../ResourceBackedModel";
import { DcRightsMixin } from "./DcRightsMixin";

export class DcText extends Mixin(ResourceBackedModel, DcRightsMixin) {
  override preMemoize() {
    super.preMemoize();
    this.preMemoizeRights();
    this.value; 
  }

  override toString(): string {
    return this.value;
  }

  @Memoize()
  get value(): string {
    return requireNonNull(
      this.findAndMapObject(rdf.value, mapTermToString)
    );
  }
}


