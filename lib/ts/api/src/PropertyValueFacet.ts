import {ValueFacet} from "./ValueFacet";
import {JsonPrimitiveType} from "./JsonPrimitiveType";
import {String} from "runtypes";
import {JsonPrimitiveRuntype} from "./JsonPrimitiveRuntype";

export const PropertyValueFacet = <T extends JsonPrimitiveRuntype>(t: T) =>
  ValueFacet<T>(t)
    .extend({
      propertyIri: String,
    })
    .asReadonly();

export interface PropertyValueFacet<T extends JsonPrimitiveType>
  extends ValueFacet<T> {
  readonly propertyIri: string;
}
