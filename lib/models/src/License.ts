import {NamedModel} from "./NamedModel";
import {requireDefined} from "./requireDefined";
import {DC} from "@paradicms/vocabularies";

export class License extends NamedModel {
  get identifier(): string {
    return requireDefined(
      this.propertyObjects(DC.identifier).find(
        term => term.termType === "Literal"
      )
    ).value;
  }

  get title(): string {
    return requireDefined(
      this.propertyObjects(DC.title).find(term => term.termType === "Literal")
    ).value;
  }

  toString() {
    return this.title;
  }
}
