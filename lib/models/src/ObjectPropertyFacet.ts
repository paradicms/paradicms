import {PropertyDefinition} from "./PropertyDefinition";
import {StringValueFacetValue} from "./StringValueFacetValue";

export interface ObjectPropertyFacet {
  readonly definition: PropertyDefinition;
  readonly objects: readonly Object[];
  readonly values: readonly StringValueFacetValue[];
}
