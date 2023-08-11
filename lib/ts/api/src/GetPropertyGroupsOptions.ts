import {PropertyGroupsQuery} from "./PropertyGroupsQuery";
import {GetModelsOptions} from "./GetModelsOptions";
import {PropertyGroupJoinSelector} from "./PropertyGroupJoinSelector";

export type GetPropertyGroupsOptions = GetModelsOptions<
  PropertyGroupJoinSelector,
  PropertyGroupsQuery,
  {}
>;
