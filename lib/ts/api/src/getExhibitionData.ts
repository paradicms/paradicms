import {Collection, ModelSet} from "@paradicms/models";
import {Api} from "index";

export const getExhibitionData = async (
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
          exists: true,
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
    await api.getWorkIris({
      query: {
        filters: collection
          ? [
              {
                includeValues: [collection.iri.value],
                type: "WorkCollectionValue",
              },
            ]
          : [],
      },
    })
  ).modelKeys;

  return {collection, collectionModelSet, workKeys};
};
