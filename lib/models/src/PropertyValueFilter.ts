import {ValueFilter} from "./ValueFilter";
import {PrimitiveValue} from "./PrimitiveValue";

export interface PropertyValueFilter<T extends PrimitiveValue>
  extends ValueFilter<T> {
  readonly propertyUri: string;
}
