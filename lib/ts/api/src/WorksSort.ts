import {Sort} from "./Sort";
import {Literal, Static, Union} from "runtypes";

export const WorksSort = Sort.extend({
  property: Union(Literal("label"), Literal("relevance")),
});

export type WorksSort = Static<typeof WorksSort>;
