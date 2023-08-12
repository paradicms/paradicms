import {PropertyGroupsQuery} from "./PropertyGroupsQuery";
import {GetModelsOptions} from "./GetModelsOptions";
import {PropertyGroupJoinSelector} from "./PropertyGroupJoinSelector";
import {Record, Static} from "runtypes";

export const GetPropertyGroupsOptions = GetModelsOptions(
  PropertyGroupJoinSelector,
  PropertyGroupsQuery,
  Record({})
);

export type GetPropertyGroupsOptions = Static<typeof GetPropertyGroupsOptions>;
