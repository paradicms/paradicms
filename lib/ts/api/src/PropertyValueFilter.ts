import {String} from "runtypes";
import {ValueFilter} from "./ValueFilter";
import {JsonPrimitiveType} from "./JsonPrimitiveType";
import {JsonPrimitiveRuntype} from "./JsonPrimitiveRuntype";

export const PropertyValueFilter = <T extends JsonPrimitiveRuntype>(t: T) =>
  ValueFilter(t)
    .extend({
      label: String,
      propertyIri: String,
    })
    .asReadonly();

export interface PropertyValueFilter<T extends JsonPrimitiveType>
  extends ValueFilter<T> {
  /**
   * Label for this filter in the user interface.
   */
  readonly label: string;

  readonly propertyIri: string;
}