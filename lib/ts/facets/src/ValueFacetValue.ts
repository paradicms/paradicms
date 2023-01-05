import {JsonPrimitiveType} from "./JsonPrimitiveType";
import {ValueFacetValueThumbnail} from "./ValueFacetValueThumbnail";

export interface ValueFacetValue<T extends JsonPrimitiveType> {
  // label and thumbnail are drawn from linked models, such as the name of a collection,
  // but they have to be duplicated here. A facet can't be a "joined" model because
  // a facet is drawn from the complete ModelSet, which may include models that aren't
  // in the ModelSet returned in a query.
  readonly label: string | null; // If null, use the value
  readonly count: number;
  readonly thumbnail: ValueFacetValueThumbnail | null;
  readonly value: T;
}
