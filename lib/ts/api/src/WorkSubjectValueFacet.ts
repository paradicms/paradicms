import {Literal, Static, String} from "runtypes";
import {ValueFacet} from "./ValueFacet";

export const WorkSubjectValueFacet = ValueFacet(String).extend({
  type: Literal("WorkSubjectValue"),
});

export type WorkSubjectValueFacet = Static<typeof WorkSubjectValueFacet>;
