import {Static, Union} from "runtypes";
import {EventSortDateExistenceFilter} from "./EventSortDateExistenceFilter";
import {IriFilter} from "./IriFilter";

export const EventsFilter = Union(EventSortDateExistenceFilter, IriFilter);

export type EventsFilter = Static<typeof EventsFilter>;
