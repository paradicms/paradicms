import {Literal} from "@rdfjs/types";
import {PropertyValue} from "./PropertyValue";

export class LiteralPropertyValue extends PropertyValue {
  constructor(readonly literal: Literal) {
    super();
  }

  get label() {
    return this.literal.value;
  }

  get value() {
    return this.literal.value;
  }
}
