import {PropertyValueFilter} from "./PropertyValueFilter";
import {Array, Literal, Optional, Static, String} from "runtypes";

export const StringPropertyValueFilter = PropertyValueFilter.extend({
  excludeValues: Optional(Array(String).asReadonly()),
  includeValues: Optional(Array(String).asReadonly()),
  type: Literal("StringPropertyValue"),
}).asReadonly();

export type StringPropertyValueFilter = Static<
  typeof StringPropertyValueFilter
>;
