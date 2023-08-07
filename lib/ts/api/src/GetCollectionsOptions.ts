import {CollectionJoinSelector} from "@paradicms/models";

export interface GetCollectionsOptions {
  readonly collectionJoinSelector?: CollectionJoinSelector;
  readonly limit?: number;
  readonly offset?: number;
}
