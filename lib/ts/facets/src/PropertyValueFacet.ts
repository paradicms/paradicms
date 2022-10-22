import {ValueFacet} from "./ValueFacet";
import {JsonPrimitiveType} from "./JsonPrimitiveType";

export interface PropertyValueFacet<T extends JsonPrimitiveType>
  extends ValueFacet<T> {
  readonly propertyUri: string;
}
