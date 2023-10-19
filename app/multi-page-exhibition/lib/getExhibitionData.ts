import {Api} from "@paradicms/api";
import {Collection, ModelSet} from "@paradicms/models";
import {DataFactory} from "@paradicms/rdf";
import {NamedNode} from "@rdfjs/types";

export const getExhibitionData = async (
  api: Api
): Promise<{
  readonly collection: Collection | null;
  readonly collectionModelSet: ModelSet;
  readonly workIris: readonly NamedNode[];
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

  const workIris = (
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
  ).modelIris.map(iri => DataFactory.namedNode(iri));

  return {collection, collectionModelSet, workIris};
};
