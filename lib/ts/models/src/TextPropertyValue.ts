import {Text} from "./Text";
import {PropertyValue} from "./PropertyValue";

export class TextPropertyValue extends PropertyValue {
  constructor(readonly text: Text) {
    super();
  }

  get label() {
    return this.value;
  }

  get value() {
    return this.text.value;
  }
}
