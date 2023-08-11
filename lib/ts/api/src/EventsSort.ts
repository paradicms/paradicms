import {Literal, Static, Union} from "runtypes";
import {Sort} from "./Sort";

export const EventsSort = Sort.extend({
  property: Union(Literal("date"), Literal("label")),
});

export type EventsSort = Static<typeof EventsSort>;
