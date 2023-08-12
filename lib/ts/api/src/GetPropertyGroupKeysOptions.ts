import {PropertyGroupsQuery} from "./PropertyGroupsQuery";
import {GetModelKeysOptions} from "./GetModelKeysOptions";
import {Record, Static} from "runtypes";

export const GetPropertyGroupKeysOptions = GetModelKeysOptions(
  PropertyGroupsQuery,
  Record({})
);

export type GetPropertyGroupKeysOptions = Static<
  typeof GetPropertyGroupKeysOptions
>;
