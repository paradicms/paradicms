import {PropertyGroupsQuery} from "./PropertyGroupsQuery";

export interface GetPropertyGroupKeysOptions {
  readonly limit?: number;
  readonly offset?: number;
  readonly query: PropertyGroupsQuery;
}
