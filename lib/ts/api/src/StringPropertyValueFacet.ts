import {PropertyValueFacet} from "./PropertyValueFacet";
import {Literal, Static} from "runtypes";

export const StringPropertyValueFacet = PropertyValueFacet.extend({
  type: Literal("StringPropertyValue"),
});

export type StringPropertyValueFacet = Static<typeof StringPropertyValueFacet>;
