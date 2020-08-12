import {PropertyDefinition} from "~/models/property/PropertyDefinition";
import {PropertyValue} from "~/models/property/PropertyValue";

export interface ObjectPropertyFacet {
  readonly definition: PropertyDefinition;
  readonly objects: readonly Object[];
  readonly values: readonly PropertyValue[];
}
