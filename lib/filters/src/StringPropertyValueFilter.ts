import {PropertyValueFilter} from "./PropertyValueFilter";

export interface StringPropertyValueFilter extends PropertyValueFilter<string> {
  readonly type: "StringPropertyValue";
}
