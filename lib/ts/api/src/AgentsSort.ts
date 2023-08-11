import {Literal, Static, Union} from "runtypes";
import {Sort} from "./Sort";

export const AgentsSort = Sort.extend({
  property: Union(Literal("name")),
});

export type AgentsSort = Static<typeof AgentsSort>;
