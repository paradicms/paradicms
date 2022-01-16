import {Model} from "./Model";
import {RDF} from "./vocabularies";
import {requireDefined} from "./requireDefined";
import {Mixin} from "ts-mixer";
import {HasRights} from "./mixins/HasRights";

export class Text extends Mixin(Model, HasRights) {
  toString() {
    return this.value;
  }

  get value(): string {
    return requireDefined(
      this.propertyObjects(RDF.value).find(term => term.termType === "Literal")
    ).value;
  }
}
