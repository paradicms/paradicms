import {EventJoinSelector} from "@paradicms/models";
import {EventsSort} from "./EventsSort";

export interface GetEventsOptions {
  readonly eventJoinSelector?: EventJoinSelector;
  readonly limit?: number;
  readonly offset?: number;
  readonly sort?: EventsSort;
}
