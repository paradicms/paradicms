import {Model} from "./Model";
import {requireDefined} from "./requireDefined";
import {Mixin} from "ts-mixer";
import {HasRights} from "./mixins/HasRights";
import {RDF} from "@paradicms/vocabularies";

export class Text extends Mixin(Model, HasRights) {
  toString() {
    return this.value;
  }

  get value(): string {
    return requireDefined(
      this.getObjects(RDF.value).find((term) => term.termType === "Literal")
    ).value;
  }
}
