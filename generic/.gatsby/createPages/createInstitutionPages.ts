import {CreatePagesArgs} from "gatsby";
import {Hrefs} from "~/Hrefs";
import * as path from "path";
import {getInstitutions} from "./getInstitutions";

export const createInstitutionPages = async (args: CreatePagesArgs) => {
  const {createPage} = args.actions;
  const institutions = await getInstitutions(args);
  for (const institution of institutions) {
    createPage({
      component: path.resolve("src/templates/institution/InstitutionPage.tsx"),
      context: {
        institution,
      },
      path: Hrefs.institution(institution).home,
    });
  }
};
