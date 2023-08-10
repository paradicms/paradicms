import {WorksQuery} from "./WorksQuery";
import {EventJoinSelector} from "@paradicms/models";
import {EventsQuery} from "./EventsQuery";
import {EventsSort} from "./EventsSort";

export interface GetWorkEventsOptions {
  readonly joinSelector?: EventJoinSelector;
  readonly eventsQuery?: EventsQuery;
  readonly limit?: number;
  readonly offset?: number;
  readonly sort?: EventsSort;
  readonly worksQuery?: WorksQuery;
}
