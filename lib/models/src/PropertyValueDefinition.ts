import {PropertyValue} from "./PropertyValue";

export interface PropertyValueDefinition {
  // If the label is null, use the value
  readonly label: string | null;

  // Child -> parent reference
  readonly propertyUri: string;

  readonly value: PropertyValue;

  // The definition needs its own URI so that Images can refer to (depict) it
  readonly uri: string;
}
