import {NamedModel} from "./NamedModel";
import {requireDefined} from "./requireDefined";
import {DC} from "@paradicms/vocabularies";

export class License extends NamedModel {
  get identifier(): string {
    return requireDefined(
      this.getObjects(DC.identifier).find((term) => term.termType === "Literal")
    ).value;
  }

  get title(): string {
    return requireDefined(
      this.getObjects(DC.title).find((term) => term.termType === "Literal")
    ).value;
  }

  toString() {
    return this.title;
  }
}
