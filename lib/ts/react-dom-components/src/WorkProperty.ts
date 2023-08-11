import {Property, PropertyValueUnion} from "@paradicms/models";

export interface WorkProperty {
  readonly property: Property;
  readonly values: readonly PropertyValueUnion[];
}
