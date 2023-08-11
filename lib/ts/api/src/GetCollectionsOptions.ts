import {CollectionJoinSelector} from "./CollectionJoinSelector";
import {CollectionsQuery} from "./CollectionsQuery";
import {GetModelsOptions} from "./GetModelsOptions";

export type GetCollectionsOptions = GetModelsOptions<
  CollectionJoinSelector,
  CollectionsQuery,
  {}
>;
