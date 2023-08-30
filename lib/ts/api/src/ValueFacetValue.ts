import {Number, Optional, Record, String} from "runtypes";
import {JsonPrimitiveRuntype} from "./JsonPrimitiveRuntype";
import {JsonPrimitiveType} from "./JsonPrimitiveType";
import {ValueFacetValueThumbnail} from "./ValueFacetValueThumbnail";

export const ValueFacetValue = <ValueT extends JsonPrimitiveRuntype>(
  valueT: ValueT
) =>
  Record({
    // label and thumbnail are drawn from linked models, such as the name of a collection,
    // but they have to be duplicated here. A facet can't be a "joined" model because
    // a facet is drawn from the complete ModelSet, which may include models that aren't
    // in the ModelSet returned in a query.
    count: Number,
    label: Optional(String), // If undefined, use the value
    thumbnail: Optional(ValueFacetValueThumbnail),
    value: valueT,
  }).asReadonly();

export interface ValueFacetValue<ValueT extends JsonPrimitiveType> {
  readonly count: number;
  readonly label?: string;
  readonly thumbnail?: ValueFacetValueThumbnail;
  readonly value: ValueT;
}
