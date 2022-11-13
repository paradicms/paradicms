import {NamedModel} from "./NamedModel";
import {requireDefined} from "./requireDefined";
import {dc} from "@paradicms/vocabularies";

export class License extends NamedModel {
  get identifier(): string {
    return requireDefined(
      this.getObjects(dc.identifier).find(term => term.termType === "Literal")
    ).value;
  }

  get title(): string {
    return requireDefined(
      this.getObjects(dc.title).find(term => term.termType === "Literal")
    ).value;
  }

  toString() {
    return this.title;
  }
}
