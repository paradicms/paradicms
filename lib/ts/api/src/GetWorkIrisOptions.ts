import {Static} from "runtypes";
import {GetModelIrisOptions} from "./GetModelIrisOptions";
import {WorksQuery} from "./WorksQuery";
import {WorksSort} from "./WorksSort";

export const GetWorkIrisOptions = GetModelIrisOptions(WorksQuery, WorksSort);

export type GetWorkIrisOptions = Static<typeof GetWorkIrisOptions>;
