import {EventJoinSelector} from "./EventJoinSelector";
import {EventsSort} from "./EventsSort";
import {EventsQuery} from "./EventsQuery";
import {GetModelsOptions} from "./GetModelsOptions";
import {Static} from "runtypes";

export const GetEventsOptions = GetModelsOptions(
  EventJoinSelector,
  EventsQuery,
  EventsSort
);

export type GetEventsOptions = Static<typeof GetEventsOptions>;
