import {Model} from "./Model";
import {RDF} from "./vocabularies";
import {Rights} from "./Rights";

export class Text extends Model {
  get rights(): Rights | null {
    return Rights.optional({dataset: this.dataset, node: this.node});
  }

  toString() {
    return this.value;
  }

  get value(): string {
    return this.requiredString(RDF.value);
  }
}
