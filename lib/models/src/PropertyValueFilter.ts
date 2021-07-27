import {ValueFilter} from "./ValueFilter";

export interface PropertyValueFilter<T> extends ValueFilter<T> {
  readonly propertyUri: string;
}
