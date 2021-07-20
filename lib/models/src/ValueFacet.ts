import {ValueFacetValue} from "./ValueFacetValue";

export interface ValueFacet<T> {
  readonly values: readonly ValueFacetValue<T>[];
}