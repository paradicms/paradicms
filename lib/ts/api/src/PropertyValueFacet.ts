import {String} from "runtypes";
import {JsonPrimitiveType} from "./JsonPrimitiveType";
import {ValueFacet} from "./ValueFacet";

export const PropertyValueFacet = <ValueT extends JsonPrimitiveType>(
  valueT: ValueT
) =>
  ValueFacet<ValueT>(valueT)
    .extend({
      propertyIri: String,
    })
    .asReadonly();

export interface PropertyValueFacet<ValueT extends JsonPrimitiveType>
  extends ValueFacet<ValueT> {
  readonly propertyIri: string;
}
