import {Text} from "./Text";
import {PropertyValue} from "./PropertyValue";
import {Property} from "./Property";

export class TextPropertyValue extends PropertyValue {
  constructor(property: Property, readonly text: Text) {
    super(property);
  }

  get label() {
    return this.value;
  }

  readonly type = "Text";

  get value() {
    return this.text.value;
  }
}
