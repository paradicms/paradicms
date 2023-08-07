import {ValueFilter} from "./ValueFilter";
import {JsonPrimitiveType} from "./JsonPrimitiveType";

export interface PropertyValueFilter<T extends JsonPrimitiveType>
  extends ValueFilter<T> {
  /**
   * Label for this filter in the user interface.
   */
  readonly label: string;

  readonly propertyIri: string;
}
