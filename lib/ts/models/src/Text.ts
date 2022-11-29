import {Model} from "./Model";
import {Mixin} from "ts-mixer";
import {HasRights} from "./mixins/HasRights";
import {rdf} from "@paradicms/vocabularies";
import {requireNonNull} from "@paradicms/utilities";

export class Text extends Mixin(Model, HasRights) {
  override toString() {
    return this.value;
  }

  get value(): string {
    return requireNonNull(
      this.findAndMapObject(rdf.value, term =>
        term.termType == "Literal" ? term.value : null
      )
    );
  }
}
