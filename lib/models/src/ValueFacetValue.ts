import {PrimitiveType} from "./PrimitiveType";

export interface ValueFacetValue<T extends PrimitiveType> {
  count: number;
  label: string | null;
  value: T;
}
