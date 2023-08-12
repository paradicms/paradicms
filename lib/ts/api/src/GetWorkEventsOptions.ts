import {WorksQuery} from "./WorksQuery";
import {EventsQuery} from "./EventsQuery";
import {EventsSort} from "./EventsSort";
import {GetModelsOptions} from "./GetModelsOptions";
import {EventJoinSelector} from "./EventJoinSelector";
import {Optional, Record, Static} from "runtypes";

export const GetWorkEventsOptions = GetModelsOptions(
  EventJoinSelector,
  Record({}),
  EventsSort
)
  .omit("query")
  .extend({
    eventsQuery: Optional(EventsQuery),
    worksQuery: Optional(WorksQuery),
  })
  .asReadonly();

export type GetWorkEventsOptions = Static<typeof GetWorkEventsOptions>;
