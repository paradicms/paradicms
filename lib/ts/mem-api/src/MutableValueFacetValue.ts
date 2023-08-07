import {JsonPrimitiveType, ValueFacetValue} from "@paradicms/api";

export interface MutableValueFacetValue<ValueT extends JsonPrimitiveType>
  extends Omit<ValueFacetValue<ValueT>, "count"> {
  count: number;
}
