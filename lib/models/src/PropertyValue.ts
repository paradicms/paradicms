import {NamedValue} from "./NamedValue";
import {Literal} from "n3";
import {Text} from "./Text";
import {ThumbnailSelector} from "./ThumbnailSelector";
import {Image} from "./Image";

export abstract class PropertyValue {
  static fromLiteral(literal: Literal) {
    return new LiteralPropertyValue(literal);
  }

  static fromNamedValue(namedValue: NamedValue) {
    return new NamedPropertyValue(namedValue);
  }

  static fromText(text: Text) {
    return new TextPropertyValue(text);
  }

  get label(): string | null {
    return null;
  }

  thumbnail(selector: ThumbnailSelector): Image | null {
    return null;
  }

  abstract toString(): string;
}

class LiteralPropertyValue extends PropertyValue {
  constructor(readonly literal: Literal) {
    super();
  }

  toString() {
    return this.literal.value;
  }
}

class NamedPropertyValue extends PropertyValue {
  constructor(readonly namedValue: NamedValue) {
    super();
  }

  get label() {
    return this.namedValue.label;
  }

  thumbnail(selector: ThumbnailSelector) {
    return this.namedValue.thumbnail(selector);
  }

  toString() {
    return this.namedValue.value.value;
  }
}

class TextPropertyValue extends PropertyValue {
  constructor(readonly text: Text) {
    super();
  }

  toString() {
    return this.text.toString();
  }
}
