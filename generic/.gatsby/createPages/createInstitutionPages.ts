import {CreatePagesArgs} from "gatsby";
import {Hrefs} from "~/Hrefs";
import * as path from "path";
import {getCollectionsByInstitution} from "./getCollectionsByInstitution";
import {getInstitutions} from "./getInstitutions";

export const createInstitutionPages = async (args: CreatePagesArgs) => {
  const {createPage} = args.actions;
  const institutions = await getInstitutions(args);
  for (const institution of institutions) {
    const collections = await getCollectionsByInstitution(
      Object.assign({}, args, {institutionUri: institution.uri})
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
