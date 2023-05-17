import {Literal} from "@rdfjs/types";
import {PropertyValue} from "./PropertyValue";
import {Property} from "./Property";

export class LiteralPropertyValue extends PropertyValue {
  constructor(readonly literal: Literal, property: Property) {
    super(property);
  }

  get label() {
    return this.literal.value;
  }

  get value() {
    return this.literal.value;
  }
}
