import {CreatePagesArgs} from "gatsby";
import {getCollectionSummaryByUri} from "./getCollectionSummaryByUri";
import {CollectionSummary} from "~/models/collection/CollectionSummary";

export const getCollectionSummariesByUris = async (
  args: CreatePagesArgs & {collectionUris: ReadonlyArray<string>}
): Promise<ReadonlyArray<CollectionSummary>> => {
  const {collectionUris} = args;
  const collections: CollectionSummary[] = [];
  for (const collectionUri of collectionUris) {
    collections.push(
      await getCollectionSummaryByUri(Object.assign({}, args, {collectionUri}))
    );
  }
  return collections;
};
