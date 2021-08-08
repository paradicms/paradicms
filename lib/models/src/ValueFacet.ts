import {ValueFacetValue} from "./ValueFacetValue";
import {Facet} from "./Facet";
import {PrimitiveType} from "./PrimitiveType";

export interface ValueFacet<T extends PrimitiveType> extends Facet {
  readonly values: readonly ValueFacetValue<T>[];
}
