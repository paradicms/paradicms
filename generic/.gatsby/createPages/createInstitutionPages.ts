import {CreatePagesArgs} from "gatsby";
import {Hrefs} from "~/Hrefs";
import * as path from "path";
import {Query} from "~/graphql/types";
import {Institution} from "~/models/institution/Institution";

export const createInstitutionPages = async (
  args: CreatePagesArgs
): Promise<readonly Institution[]> => {
  const {graphql} = args;
  const {createPage} = args.actions;

  const allInstitutionJson = await graphql<Pick<Query, "allInstitutionJson">>(`
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

  if (!allInstitutionJson.data) {
    return Promise.reject(allInstitutionJson.errors);
  }

  const institutions: Institution[] =
    allInstitutionJson.data.allInstitutionJson.nodes;

  return await Promise.all(
    institutions.map(async institution => {
      createPage({
        component: path.resolve(
          "src/templates/institution/InstitutionPage.tsx"
        ),
        context: {
          institution,
          institutionUri: institution.uri,
        },
        path: Hrefs.institution(institution).home,
      });

      return institution;
    })
  );
};
