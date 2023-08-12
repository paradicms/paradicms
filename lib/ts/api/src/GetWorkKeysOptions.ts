import {WorksSort} from "./WorksSort";
import {WorksQuery} from "./WorksQuery";
import {GetModelKeysOptions} from "./GetModelKeysOptions";
import {Static} from "runtypes";

export const GetWorkKeysOptions = GetModelKeysOptions(WorksQuery, WorksSort);

export type GetWorkKeysOptions = Static<typeof GetWorkKeysOptions>;
