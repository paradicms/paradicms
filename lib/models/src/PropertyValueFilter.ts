import {ValueFilter} from "./ValueFilter";
import {PrimitiveType} from "./PrimitiveType";

export interface PropertyValueFilter<T extends PrimitiveType>
  extends ValueFilter<T> {
  readonly propertyUri: string;
}
