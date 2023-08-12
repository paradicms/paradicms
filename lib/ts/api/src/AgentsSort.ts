import {Literal, Static, Union} from "runtypes";
import {Sort} from "./Sort";

export const AgentsSort = Sort.extend({
  property: Union(Literal("name")),
}).asReadonly();

export type AgentsSort = Static<typeof AgentsSort>;
