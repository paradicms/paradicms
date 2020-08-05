import {CreatePagesArgs} from "gatsby";
// @ts-ignore
import {ObjectFragment} from "~/graphql/object/ObjectFragment";

export const getCollectionObjects = async (
  args: CreatePagesArgs & {collectionUri: string; institutionUri: string}
): Promise<readonly Object[]> => {
  const {graphql} = args;

  const result = await graphql<Pick<GatsbyTypes.Query, "allObjectJson">>(
    `
      ${ObjectFragment}

      query getCollectionObjects(
        $collectionUri: String!
        $institutionUri: String!
      ) {
        allObjectJson(
          filter: {
            collection_uris: {in: [$collectionUri]}
            institution_uri: {eq: $institutionUri}
          }
        ) {
          nodes {
            ...ObjectFragment
          }
        }
      }
    `,
    args
  );

  if (!result.data) {
    return Promise.reject(result.errors);
  }
  return result.data.allObjectJson.nodes;
};
