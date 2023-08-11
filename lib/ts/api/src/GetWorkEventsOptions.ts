import {WorksQuery} from "./WorksQuery";
import {EventsQuery} from "./EventsQuery";
import {EventsSort} from "./EventsSort";
import {GetModelsOptions} from "./GetModelsOptions";
import {EventJoinSelector} from "./EventJoinSelector";

export interface GetWorkEventsOptions
  extends Omit<GetModelsOptions<EventJoinSelector, {}, EventsSort>, "query"> {
  readonly eventsQuery?: EventsQuery;
  readonly worksQuery?: WorksQuery;
}
