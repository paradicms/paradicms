import {KeyFilter} from "./KeyFilter";
import {EventSortDateExistenceFilter} from "./EventSortDateExistenceFilter";

// Discriminated union on "type"
export type EventsFilter = EventSortDateExistenceFilter | KeyFilter;
