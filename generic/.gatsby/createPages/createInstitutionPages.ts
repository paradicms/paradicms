import {CreatePagesArgs} from "gatsby";
import {Hrefs} from "~/Hrefs";
import * as path from "path";
import {getInstitutions} from "./getInstitutions";
import {getCollectionSummariesByUris} from "./getCollectionSummariesByUris";

export const createInstitutionPages = async (args: CreatePagesArgs) => {
  const {createPage} = args.actions;
  const institutions = await getInstitutions(args);
  for (const institution of institutions) {
    const collections = await getCollectionSummariesByUris(
      Object.assign({}, args, {collectionUris: institution.collection_uris})
    );

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
