import {CreatePagesArgs} from "gatsby";
import {Institution} from "~/models/institution/Institution";

export const getInstitutions = async (
  args: CreatePagesArgs
): Promise<ReadonlyArray<Institution>> => {
  const {graphql} = args;

  const result = await graphql<Pick<GatsbyTypes.Query, "allInstitutionJson">>(`
    {
      allInstitutionJson {
        nodes {
          name
          rights {
            holder
            statements
          }
          uri
        }
      }
    }
  `);

  if (!result.data) {
    return Promise.reject(result.errors);
  }
  return result.data.allInstitutionJson.nodes;
};
