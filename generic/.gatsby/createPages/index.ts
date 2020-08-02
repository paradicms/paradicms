import {CreatePagesArgs} from "gatsby";
import {createInstitutionPages} from "./createInstitutionPages";
import {createCollectionPages} from "./createCollectionPages";

export const createPages = async (args: CreatePagesArgs) => {
  await createCollectionPages(args);
  await createInstitutionPages(args);
};
