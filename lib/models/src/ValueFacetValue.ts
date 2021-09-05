import {PrimitiveType} from "./PrimitiveType";
import {ImageDimensions} from "./ImageDimensions";

export interface ValueFacetValue<T extends PrimitiveType> {
  // label and thumbnail are drawn from linked models, such as the name of a collection,
  // but they have to be duplicated here. A facet can't be a "joined" model because
  // a facet is drawn from the complete Dataset, which may include models that aren't
  // in the Dataset returned in a query.
  readonly label: string | null; // If null, use the value
  readonly count: number;
  readonly thumbnail: {
    exactDimensions: ImageDimensions | null;
    maxDimensions: ImageDimensions | null;
    src: string;
  } | null;
  readonly value: T;
}
