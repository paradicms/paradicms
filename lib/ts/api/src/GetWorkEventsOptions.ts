import {WorksQuery} from "./WorksQuery";
import {EventJoinSelector} from "@paradicms/models";
import {EventsQuery} from "./EventsQuery";
import {EventsSort} from "./EventsSort";
import {GetModelsOptions} from "./GetModelsOptions";

export interface GetWorkEventsOptions
  extends Omit<GetModelsOptions<EventJoinSelector, {}, EventsSort>, "query"> {
  readonly eventsQuery?: EventsQuery;
  readonly worksQuery?: WorksQuery;
}
