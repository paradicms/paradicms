import {PropertyValueFacet} from "./PropertyValueFacet";
import {Literal, Static, String} from "runtypes";

export const StringPropertyValueFacet = PropertyValueFacet(String).extend({
  type: Literal("StringPropertyValue"),
});

export type StringPropertyValueFacet = Static<typeof StringPropertyValueFacet>;
