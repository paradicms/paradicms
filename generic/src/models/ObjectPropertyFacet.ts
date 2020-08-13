import {PropertyDefinition} from "~/models/PropertyDefinition";
import {PropertyValue} from "~/models/PropertyValue";

export interface ObjectPropertyFacet {
  readonly definition: PropertyDefinition;
  readonly objects: readonly Object[];
  readonly values: readonly PropertyValue[];
}
