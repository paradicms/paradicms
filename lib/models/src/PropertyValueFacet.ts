import {ValueFacet} from "./ValueFacet";
import {PrimitiveValue} from "./PrimitiveValue";

export interface PropertyValueFacet<T extends PrimitiveValue>
  extends ValueFacet<T> {
  readonly propertyUri: string;
}
