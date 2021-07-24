import {PropertyValueFacet} from "PropertyValueFacet";

export interface StringPropertyValueFacet extends PropertyValueFacet<string> {
  readonly type: "StringPropertyValue";
}