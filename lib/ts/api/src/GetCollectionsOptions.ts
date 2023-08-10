import {CollectionJoinSelector} from "@paradicms/models";
import {CollectionsQuery} from "./CollectionsQuery";

export interface GetCollectionsOptions {
  readonly joinSelector?: CollectionJoinSelector;
  readonly limit?: number;
  readonly offset?: number;
  readonly query?: CollectionsQuery;
}
