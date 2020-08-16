import {CreatePagesArgs} from "gatsby";
import {Hrefs} from "~/Hrefs";
import * as path from "path";
import {Institution} from "~/models/Institution";
import {Query} from "~/graphql/types";
import {Collection} from "~/models/Collection";

export const createCollectionPages = async (
  args: CreatePagesArgs & {
    institutions: readonly Institution[];
  }
) => {
  const {graphql, institutions} = args;
  const {createPage} = args.actions;
  await Promise.all(
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

      for (const collection of collections) {
        createPage({
          component: path.resolve("src/templates/CollectionPage.tsx"),
          context: {
            collection,
            collectionUri: collection.uri,
            institution,
            institutionUri: institution.uri,
          },
          path: Hrefs.institution(institution).collection(collection).home,
        });
      }
    })
  );
};
