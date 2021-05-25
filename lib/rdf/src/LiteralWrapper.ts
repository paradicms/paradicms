import {Literal} from "rdflib/lib/tf-types";
import {XSD} from "./vocabularies";
import {RdfReaderException} from "./RdfReaderException";

export class LiteralWrapper {
  constructor(readonly literal: Literal) {}

  isBlank(): boolean {
    return this.literal.value.trim().length === 0;
  }

  isBoolean(): boolean {
    return this.literal.datatype.equals(XSD.boolean_);
  }

  isInteger(): boolean {
    return this.literal.datatype.equals(XSD.integer);
  }

  isString(): boolean {
    return this.literal.datatype.equals(XSD.string_);
  }

  toBoolean(): boolean {
    if (!this.isBoolean()) {
      throw new RangeError("literal is not a boolean");
    }
    switch (this.literal.value) {
      case "0":
      case "false":
        return false;
      case "1":
      case "true":
        return true;
      default:
        throw new RdfReaderException(
          "literal does not have a boolean value: " + this.literal.value
        );
    }
  }

  toInteger(): number {
    if (!this.isInteger()) {
      throw new RangeError("literal is not an integer");
    }
    return parseInt(this.literal.value);
  }

  toString(): string {
    return this.literal.value;
  }
}
