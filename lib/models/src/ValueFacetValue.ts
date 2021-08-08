import {PrimitiveValue} from "./PrimitiveValue";

export interface ValueFacetValue<T extends PrimitiveValue> {
  count: number;
  label: string | null;
  value: T;
}
