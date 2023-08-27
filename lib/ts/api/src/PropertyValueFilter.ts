import {String} from "runtypes";
import {JsonPrimitiveRuntype} from "./JsonPrimitiveRuntype";
import {JsonPrimitiveType} from "./JsonPrimitiveType";
import {ValueFilter} from "./ValueFilter";

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
