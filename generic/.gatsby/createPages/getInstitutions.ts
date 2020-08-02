import {CreatePagesArgs} from "gatsby";

export const getInstitutions = async (
  args: CreatePagesArgs
): Promise<GatsbyTypes.InstitutionJson[]> => {
  const {graphql} = args;

  const allInstitutionsJson = await graphql(`
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

  return (allInstitutionsJson.data as any).allInstitutionJson
    .nodes as GatsbyTypes.InstitutionJson[];
};
