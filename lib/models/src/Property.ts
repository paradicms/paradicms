import {PrimitiveValue} from "./PrimitiveValue";

export interface Property {
  readonly uri: string;
  readonly value: PrimitiveValue;
}
