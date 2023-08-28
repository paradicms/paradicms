import {String} from "runtypes";
import {JsonPrimitiveRuntype} from "./JsonPrimitiveRuntype";
import {JsonPrimitiveType} from "./JsonPrimitiveType";
import {ValueFilter} from "./ValueFilter";

export const PropertyValueFilter = <ValueT extends JsonPrimitiveRuntype>(
  valueT: ValueT
) =>
  ValueFilter(valueT)
    .extend({
      label: String,
      propertyIri: String,
    })
    .asReadonly();

export interface PropertyValueFilter<ValueT extends JsonPrimitiveType>
  extends ValueFilter<ValueT> {
  /**
   * Label for this filter in the user interface.
   */
  readonly label: string;

  readonly propertyIri: string;
}
