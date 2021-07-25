import {ValueFacet} from "./ValueFacet";

export interface PropertyValueFacet<T> extends ValueFacet<T> {
  readonly propertyUri: string;
}
