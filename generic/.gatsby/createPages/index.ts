import {CreatePagesArgs} from "gatsby";
import {createInstitutionPages} from "./createInstitutionPages";

export const createPages = async (args: CreatePagesArgs) => {
  await createInstitutionPages(args);
};
