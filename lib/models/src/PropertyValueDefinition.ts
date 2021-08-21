import {PropertyValue} from "./PropertyValue";

export interface PropertyValueDefinition {
  // If the label is null, use the value
  readonly label: string | null;

  // 1+ child -> parent references
  readonly propertyUris: readonly string[];

  readonly value: PropertyValue;

  // The definition needs its own URI so that Images can refer to (depict) it
  readonly uri: string;
}
