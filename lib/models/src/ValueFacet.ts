import {ValueFacetValue} from "./ValueFacetValue";
import {Facet} from "./Facet";

export interface ValueFacet<T> extends Facet {
  readonly values: readonly ValueFacetValue<T>[];
}
