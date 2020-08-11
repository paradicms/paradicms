import {ObjectPropertyDefinition} from "~/models/object/ObjectPropertyDefinition";
import {ObjectPropertyValue} from "~/models/object/ObjectPropertyValue";

export interface ObjectPropertyFacet {
  readonly definition: ObjectPropertyDefinition;
  readonly objects: readonly Object[];
  readonly values: readonly ObjectPropertyValue[];
}
