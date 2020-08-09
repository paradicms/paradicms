import {CreatePagesArgs} from "gatsby";
import {Hrefs} from "~/Hrefs";
import * as path from "path";
import {Query} from "~/graphql/types";
import {Collection} from "~/models/collection/Collection";
import {Institution} from "~/models/institution/Institution";
import {InstitutionWithCollections} from "./InstitutionWithCollections";

export const createInstitutionPages = async (
  args: CreatePagesArgs
): Promise<readonly InstitutionWithCollections[]> => {
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
      const allCollectionJson = await graphql<
        Pick<Query, "allCollectionJson">,
        {institutionUri: string}
      >(
        `
          query($institutionUri: String!) {
            allCollectionJson(filter: {institutionUri: {eq: $institutionUri}}) {
              nodes {
                institutionUri
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
        {institutionUri: institution.uri}
      );

      if (!allCollectionJson.data) {
        return Promise.reject(allCollectionJson.errors);
      }
      const collections: Collection[] =
        allCollectionJson.data.allCollectionJson.nodes;

      createPage({
        component: path.resolve(
          "src/templates/institution/InstitutionPage.tsx"
        ),
        context: {
          collections,
          institution,
        },
        path: Hrefs.institution(institution).home,
      });

      return {institution, collections};
    })
  );
};
