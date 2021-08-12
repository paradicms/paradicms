import {PropertyValue} from "./PropertyValue";

export interface Property {
  readonly uri: string;
  readonly value: PropertyValue;
}
