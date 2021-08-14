import {PropertyValue} from "./PropertyValue";

export interface PropertyValueDefinition {
  // If the label is undefined, use the value
  readonly label?: string;

  // Child -> parent reference
  readonly propertyUri: string;

  readonly value: PropertyValue;

  // The definition needs its own URI so that Images can refer to (depict) it
  readonly uri: string;
}
