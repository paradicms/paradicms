import {Property, PropertyValue} from "@paradicms/models";

export interface WorkProperty {
  readonly property: Property;
  readonly values: readonly PropertyValue[];
}
