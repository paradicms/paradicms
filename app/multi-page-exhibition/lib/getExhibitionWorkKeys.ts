import {Api} from "@paradicms/api";
import {Collection, ModelSet} from "@paradicms/models";

export const getExhibitionWorkKeys = async (
  api: Api
): Promise<{
  readonly collection: Collection | null;
  readonly collectionModelSet: ModelSet;
  readonly workKeys: readonly string[];
}> => {
  const {modelSet: collectionModelSet} = await api.getCollections({
    limit: 1,
    query: {
      filters: [
        {
          excludeUnknown: true,
          type: "CollectionWorksExistence",
        },
      ],
    },
  });

  const collection =
    collectionModelSet.collections.length > 0
      ? collectionModelSet.collections[0]
      : null;

  const workKeys = (
    await api.getWorkKeys({
      query: {
        filters: collection
          ? [
              {
                includeValues: [collection.key],
                type: "WorkCollectionValue",
              },
            ]
          : [],
      },
    })
  ).workKeys;

  return {collection, collectionModelSet, workKeys};
};
