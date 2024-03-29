import {EventsFilter} from "./EventsFilter";
import {Array, Optional, Record, Static} from "runtypes";

export const EventsQuery = Record({
  filters: Optional(Array(EventsFilter).asReadonly()),
}).asReadonly();

export type EventsQuery = Static<typeof EventsQuery>;
