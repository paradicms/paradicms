import {ValueFacet} from "./ValueFacet";
import {JsonPrimitiveType} from "./JsonPrimitiveType";
import {String} from "runtypes";

export const PropertyValueFacet = ValueFacet.extend({
  propertyIri: String,
}).asReadonly();

export interface PropertyValueFacet<T extends JsonPrimitiveType>
  extends ValueFacet<T> {
  readonly propertyIri: string;
}
