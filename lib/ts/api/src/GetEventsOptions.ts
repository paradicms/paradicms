import {EventJoinSelector} from "@paradicms/models";
import {EventsSort} from "./EventsSort";
import {EventsQuery} from "./EventsQuery";

export interface GetEventsOptions {
  readonly eventJoinSelector?: EventJoinSelector;
  readonly limit?: number;
  readonly offset?: number;
  readonly query?: EventsQuery;
  readonly sort?: EventsSort;
}
