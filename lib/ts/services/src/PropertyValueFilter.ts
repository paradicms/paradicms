import {ValueFilter} from "./ValueFilter";
import {JsonPrimitiveType} from "./JsonPrimitiveType";

export interface PropertyValueFilter<T extends JsonPrimitiveType>
  extends ValueFilter<T> {
  readonly propertyIri: string;
}
