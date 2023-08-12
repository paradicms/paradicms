import {Static, Union} from "runtypes";
import {EventSortDateExistenceFilter} from "./EventSortDateExistenceFilter";
import {KeyFilter} from "./KeyFilter";

export const EventsFilter = Union(EventSortDateExistenceFilter, KeyFilter);

export type EventsFilter = Static<typeof EventsFilter>;
