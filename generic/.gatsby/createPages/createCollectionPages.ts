import {CreatePagesArgs} from "gatsby";
import {Hrefs} from "~/Hrefs";
import * as path from "path";
import {getInstitutions} from "./getInstitutions";
import {getCollectionsByInstitution} from "./getCollectionsByInstitution";

export const createCollectionPages = async (args: CreatePagesArgs) => {
  const {createPage} = args.actions;
  const institutions = await getInstitutions(args);
  for (const institution of institutions) {
    const collections = await getCollectionsByInstitution(
      Object.assign({}, args, {institutionUri: institution.uri})
    );
    for (const collection of collections) {
      createPage({
        component: path.resolve("src/templates/collection/CollectionPage.tsx"),
        context: {
          collection,
          collectionUri: collection.uri,
          institution,
          institutionUri: institution.uri,
        },
        path: Hrefs.institution(institution).collection(collection).home,
      });
    }
  }
};
