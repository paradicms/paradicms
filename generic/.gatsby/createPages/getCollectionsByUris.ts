import {CreatePagesArgs} from "gatsby";
import {getCollectionByUri} from ".gatsby/createPages/getCollectionByUri";

export const getCollectionsByUris = async (
  args: CreatePagesArgs & {collectionUris: ReadonlyArray<string>}
): Promise<ReadonlyArray<GatsbyTypes.CollectionJson>> => {
  const {collectionUris} = args;
  const collections: GatsbyTypes.CollectionJson[] = [];
  for (const collectionUri of collectionUris) {
    collections.push(
      await getCollectionByUri(Object.assign({}, args, {collectionUri}))
    );
  }
  return collections;
};
