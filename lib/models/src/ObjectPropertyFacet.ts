import {PropertyDefinition} from "./PropertyDefinition";
import {StringFacetValue} from "./StringFacetValue";

export interface ObjectPropertyFacet {
  readonly definition: PropertyDefinition;
  readonly objects: readonly Object[];
  readonly values: readonly StringFacetValue[];
}
