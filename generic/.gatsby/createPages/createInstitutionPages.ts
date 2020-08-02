import {CreatePagesArgs} from "gatsby";
import {Hrefs} from "~/Hrefs";
import * as path from "path";
import {getInstitutions} from "./getInstitutions";

export const createInstitutionPages = async (args: CreatePagesArgs) => {
  const {graphql} = args;
  const {createPage} = args.actions;
  const institutions = await getInstitutions(args);
  for (const institution of institutions) {
    const collections: Pick<GatsbyTypes.CollectionJson, "title" | "uri">[] = [];
    for (const collectionUri of institution.collection_uris) {
      const result = await graphql<
        Pick<GatsbyTypes.Query, "allCollectionJson">,
        {collectionUri: string}
      >(
        `
          query($collectionUri: String!) {
            allCollectionJson(filter: {uri: {eq: $collectionUri}}) {
              nodes {
                title
                uri
              }
            }
          }
        `,
        {collectionUri}
      );
      if (result.data) {
        if (result.data.allCollectionJson.nodes.length > 0) {
          collections.push(result.data.allCollectionJson.nodes[0]);
        }
      } else {
        return Promise.reject(result.errors);
      }
    }

    createPage({
      component: path.resolve("src/templates/institution/InstitutionPage.tsx"),
      context: {
        collections,
        institution,
      },
      path: Hrefs.institution(institution).home,
    });
  }
};
