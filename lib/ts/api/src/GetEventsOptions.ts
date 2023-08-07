import {EventJoinSelector} from "@paradicms/models";
import {EventsSort} from "./EventsSort";
import {EventsFilter} from "./EventsFilter";

export interface GetEventsOptions {
  readonly eventJoinSelector?: EventJoinSelector;
  readonly filters: EventsFilter[];
  readonly limit: number;
  readonly offset: number;
  readonly sort?: EventsSort;
}
