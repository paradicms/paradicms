import {PrimitiveType} from "./PrimitiveType";

export interface Property {
  readonly uri: string;
  readonly value: PrimitiveType;
}
