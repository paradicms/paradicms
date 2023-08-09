import {EventsQuery} from "./EventsQuery";
import {EventsSort} from "./EventsSort";

export interface GetEventKeysOptions {
  readonly limit?: number;
  readonly offset?: number;
  readonly query: EventsQuery;
  readonly sort?: EventsSort;
}
