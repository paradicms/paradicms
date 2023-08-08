import {CollectionJoinSelector} from "@paradicms/models";
import {CollectionsQuery} from "./CollectionsQuery";

export interface GetCollectionsOptions {
  readonly collectionJoinSelector?: CollectionJoinSelector;
  readonly limit?: number;
  readonly offset?: number;
  readonly query?: CollectionsQuery;
}
