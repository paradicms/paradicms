import {CreatePagesArgs} from "gatsby";

export const getInstitutions = async (
  args: CreatePagesArgs
): Promise<any[]> => {
  const {graphql} = args;

  const allInstitutionsJson = await graphql(`
    {
      allInstitutionJson {
        nodes {
          collection_uris
          name
          owner_uri
          rights
          uri
        }
      }
    }
  `);

  return (allInstitutionsJson.data as any).allInstitutionJson
    .nodes as GatsbyTypes.InstitutionJson[];
};
