import {Model} from "./Model";
import {RDF} from "./vocabularies";
import {Rights} from "./Rights";
import {Memoize} from "typescript-memoize";
import {requireDefined} from "./requireDefined";

export class Text extends Model {
  @Memoize()
  get rights(): Rights | null {
    return Rights.optional({
      dataset: this.dataset,
      graphNode: this.graphNode,
      node: this.node,
    });
  }

  toString() {
    return this.value;
  }

  get value(): string {
    return requireDefined(
      this.propertyObjects(RDF.value).find(term => term.termType === "Literal")
    ).value;
  }
}
