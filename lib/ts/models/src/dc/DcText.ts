import {requireNonNull} from "@paradicms/utilities";
import {rdf} from "@paradicms/vocabularies";
import {Mixin} from "ts-mixer";
import {mapTermToString} from "@paradicms/rdf";
import {DcRightsMixin} from "./DcRightsMixin";
import {ResourceBackedModel} from "../ResourceBackedModel";

export class DcText extends Mixin(ResourceBackedModel, DcRightsMixin) {
  override toString(): string {
    return this.value;
  }

  get value(): string {
    return requireNonNull(
      this.findAndMapObject(rdf.value, mapTermToString)
    );
  }
}


