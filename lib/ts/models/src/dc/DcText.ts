import {requireNonNull} from "@paradicms/utilities";
import {rdf} from "@paradicms/vocabularies";
import {Mixin} from "ts-mixer";
import {mapTermToString} from "@paradicms/rdf";
import {DcModel} from "./DcModel";
import {DcRightsMixin} from "./DcRightsMixin";

export class DcText extends Mixin(DcModel, DcRightsMixin) {
  override toString(): string {
    return this.value;
  }

  get value(): string {
    return requireNonNull(
      this.findAndMapObject(rdf.value, mapTermToString)
    );
  }
}


