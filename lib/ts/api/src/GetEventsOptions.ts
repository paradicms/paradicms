import {EventJoinSelector} from "@paradicms/models";
import {EventsSort} from "./EventsSort";
import {EventsQuery} from "./EventsQuery";
import {GetModelsOptions} from "./GetModelsOptions";

export type GetEventsOptions = GetModelsOptions<
  EventJoinSelector,
  EventsQuery,
  EventsSort
>;
