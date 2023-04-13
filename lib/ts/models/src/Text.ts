import {Model} from "./Model";
import {Mixin} from "ts-mixer";
import {rdf} from "@paradicms/vocabularies";
import {requireNonNull} from "@paradicms/utilities";
import {RightsMixin} from "./RightsMixin";

export class Text extends Mixin(Model, RightsMixin) {
  override toString() {
    return this.value;
  }

  get value(): string {
    return requireNonNull(
      this.findAndMapObject(rdf.value, this.mapStringObject)
    );
  }
}
