import {Static} from "runtypes";
import {EventsQuery} from "./EventsQuery";
import {EventsSort} from "./EventsSort";
import {GetModelIrisOptions} from "./GetModelIrisOptions";

export const GetEventIrisOptions = GetModelIrisOptions(EventsQuery, EventsSort);

export type GetEventIrisOptions = Static<typeof GetEventIrisOptions>;
