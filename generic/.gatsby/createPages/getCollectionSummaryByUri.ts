import {CreatePagesArgs} from "gatsby";
import {CollectionSummary} from "~/models/collection/CollectionSummary";

export const getCollectionSummaryByUri = async (
  args: CreatePagesArgs & {collectionUri: string}
): Promise<CollectionSummary> => {
  const {collectionUri, graphql} = args;

  const result = await graphql<
    Pick<GatsbyTypes.Query, "allCollectionJson">,
    {collectionUri: string}
  >(
    `
      query($collectionUri: String!) {
        allCollectionJson(filter: {uri: {eq: $collectionUri}}) {
          nodes {
            rights {
              holder
              statements
            }
            title
            uri
          }
        }
      }
    `,
    {collectionUri}
  );

  if (result.data) {
    return result.data.allCollectionJson.nodes[0];
  } else {
    return Promise.reject(result.errors);
  }
};
