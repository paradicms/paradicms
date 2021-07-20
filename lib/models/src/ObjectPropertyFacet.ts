import {PropertyDefinition} from "./PropertyDefinition";
import {ValueFacetValue} from "ValueFacetValue";

export interface ObjectPropertyFacet {
  readonly definition: PropertyDefinition;
  readonly objects: readonly Object[];
  readonly values: readonly ValueFacetValue<string>[];
}
