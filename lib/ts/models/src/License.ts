import {NamedModel} from "./NamedModel";
import {dc11} from "@paradicms/vocabularies";
import {requireDefined} from "@paradicms/rdf";

export class License extends NamedModel {
  get identifier(): string {
    return requireDefined(
      this.getObjects(dc11.identifier).find(term => term.termType === "Literal")
    ).value;
  }

  get title(): string {
    return requireDefined(
      this.getObjects(dc11.title).find(term => term.termType === "Literal")
    ).value;
  }

  toString() {
    return this.title;
  }
}
