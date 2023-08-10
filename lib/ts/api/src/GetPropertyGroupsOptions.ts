import {PropertyGroupJoinSelector} from "@paradicms/models";
import {PropertyGroupsQuery} from "./PropertyGroupsQuery";
import {GetModelsOptions} from "./GetModelsOptions";

export type GetPropertyGroupsOptions = GetModelsOptions<
  PropertyGroupJoinSelector,
  PropertyGroupsQuery,
  {}
>;
