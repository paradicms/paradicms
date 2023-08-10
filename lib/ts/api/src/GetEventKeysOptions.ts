import {EventsQuery} from "./EventsQuery";
import {EventsSort} from "./EventsSort";
import {GetModelKeysOptions} from "./GetModelKeysOptions";

export type GetEventKeysOptions = GetModelKeysOptions<EventsQuery, EventsSort>;
