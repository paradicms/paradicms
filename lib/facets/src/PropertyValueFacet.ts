import {ValueFacet} from "./ValueFacet";
import {PrimitiveType} from "./PrimitiveType";

export interface PropertyValueFacet<T extends PrimitiveType>
  extends ValueFacet<T> {
  readonly propertyUri: string;
}
