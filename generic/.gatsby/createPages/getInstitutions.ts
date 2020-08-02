import {CreatePagesArgs} from "gatsby";

export const getInstitutions = async (
  args: CreatePagesArgs
): Promise<ReadonlyArray<GatsbyTypes.InstitutionJson>> => {
  const {graphql} = args;

  const result = await graphql<Pick<GatsbyTypes.Query, "allInstitutionJson">>(`
    {
      allInstitutionJson {
        nodes {
          collection_uris
          name
          owner_uri
          rights {
            holder
            statements
          }
          uri
        }
      }
    }
  `);

  if (result.data) {
    return result.data.allInstitutionJson.nodes;
  } else {
    return Promise.reject(result.errors);
  }
};
