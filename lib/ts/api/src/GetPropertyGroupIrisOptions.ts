import {Record, Static} from "runtypes";
import {GetModelIrisOptions} from "./GetModelIrisOptions";
import {PropertyGroupsQuery} from "./PropertyGroupsQuery";

export const GetPropertyGroupIrisOptions = GetModelIrisOptions(
  PropertyGroupsQuery,
  Record({})
);

export type GetPropertyGroupIrisOptions = Static<
  typeof GetPropertyGroupIrisOptions
>;
