import {Record, Static} from "runtypes";
import {CollectionJoinSelector} from "./CollectionJoinSelector";
import {CollectionsQuery} from "./CollectionsQuery";
import {GetModelsOptions} from "./GetModelsOptions";

export const GetCollectionsOptions = GetModelsOptions(
  CollectionJoinSelector,
  CollectionsQuery,
  Record({})
);

export type GetCollectionsOptions = Static<typeof GetCollectionsOptions>;
