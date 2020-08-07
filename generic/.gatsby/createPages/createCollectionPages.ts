import {CreatePagesArgs} from "gatsby";
// @ts-ignore
import {Hrefs} from "~/Hrefs";
// @ts-ignore
import * as path from "path";
import {InstitutionWithCollections} from "./InstitutionWithCollections";

export const createCollectionPages = async (
  args: CreatePagesArgs & {
    institutionsWithCollections: readonly InstitutionWithCollections[];
  }
) => {
  const {institutionsWithCollections} = args;
  const {createPage} = args.actions;
  await Promise.all(
    institutionsWithCollections.map(institutionsWithCollections => {
      const {institution, collections} = institutionsWithCollections;

      for (const collection of collections) {
        createPage({
          component: path.resolve(
            "src/templates/collection/CollectionPage.tsx"
          ),
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
