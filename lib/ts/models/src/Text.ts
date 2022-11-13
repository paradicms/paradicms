import {Model} from "./Model";
import {Mixin} from "ts-mixer";
import {HasRights} from "./mixins/HasRights";
import {rdf} from "@paradicms/vocabularies";
import {requireDefined} from "@paradicms/rdf";

export class Text extends Mixin(Model, HasRights) {
  toString() {
    return this.value;
  }

  get value(): string {
    return requireDefined(
      this.getObjects(rdf.value).find(term => term.termType === "Literal")
    ).value;
  }
}
