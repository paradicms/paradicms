import {Static} from "runtypes";
import {EventsQuery} from "./EventsQuery";
import {EventsSort} from "./EventsSort";
import {GetModelKeysOptions} from "./GetModelKeysOptions";

export const GetEventKeysOptions = GetModelKeysOptions(EventsQuery, EventsSort);

export type GetEventKeysOptions = Static<typeof GetEventKeysOptions>;
