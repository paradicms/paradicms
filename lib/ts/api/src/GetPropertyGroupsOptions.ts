import {PropertyGroupJoinSelector} from "@paradicms/models";
import {PropertyGroupsQuery} from "./PropertyGroupsQuery";

export interface GetPropertyGroupsOptions {
  readonly limit?: number;
  readonly offset?: number;
  readonly query?: PropertyGroupsQuery;
  readonly propertyGroupJoinSelector?: PropertyGroupJoinSelector;
}
