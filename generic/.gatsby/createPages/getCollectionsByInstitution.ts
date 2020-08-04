import {CreatePagesArgs} from "gatsby";
import {Collection} from "~/models/collection/Collection";

export const getCollectionsByInstitution = async (
  args: CreatePagesArgs & {institutionUri: string}
): Promise<readonly Collection[]> => {
  const {graphql, institutionUri} = args;

  const result = await graphql<
    Pick<GatsbyTypes.Query, "allCollectionJson">,
    {institutionUri: string}
  >(
    `
      query($institutionUri: String!) {
        allCollectionJson(filter: {institution_uri: {eq: $institutionUri}}) {
          nodes {
            institution_uri
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
    {institutionUri}
  );

  if (!result.data) {
    return Promise.reject(result.errors);
  }
  return result.data.allCollectionJson.nodes;
};
