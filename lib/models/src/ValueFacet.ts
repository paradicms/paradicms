import {ValueFacetValue} from "./ValueFacetValue";
import {Facet} from "./Facet";
import {PrimitiveValue} from "./PrimitiveValue";

export interface ValueFacet<T extends PrimitiveValue> extends Facet {
  readonly values: readonly ValueFacetValue<T>[];
}
