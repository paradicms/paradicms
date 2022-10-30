import {requireDefined} from "../requireDefined";
import {FOAF} from "@paradicms/vocabularies";
import {ModelMixin} from "./ModelMixin";

export abstract class HasName extends ModelMixin {
  get name(): string {
    return requireDefined(
      this.getObjects(FOAF.name_).find((term) => term.termType === "Literal")
    ).value;
  }
}
