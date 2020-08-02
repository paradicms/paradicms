import {CreatePagesArgs} from "gatsby";

export const getCollectionByUri = async (
  args: CreatePagesArgs & {collectionUri: string}
): Promise<GatsbyTypes.CollectionJson> => {
  const {collectionUri, graphql} = args;

  const result = await graphql<
    Pick<GatsbyTypes.Query, "allCollectionJson">,
    {collectionUri: string}
  >(
    `
      query($collectionUri: String!) {
        allCollectionJson(filter: {uri: {eq: $collectionUri}}) {
          nodes {
            object_uris
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
