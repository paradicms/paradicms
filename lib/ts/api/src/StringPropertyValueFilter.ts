import {PropertyValueFilter} from "./PropertyValueFilter";
import {Literal, Static, String} from "runtypes";

export const StringPropertyValueFilter = PropertyValueFilter(String)
  .extend({
    type: Literal("StringPropertyValue"),
  })
  .asReadonly();

export type StringPropertyValueFilter = Static<
  typeof StringPropertyValueFilter
>;
