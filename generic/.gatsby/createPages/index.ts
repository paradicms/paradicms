import {CreatePagesArgs} from "gatsby";
import {createInstitutionPages} from "./createInstitutionPages";
import {createCollectionPages} from "./createCollectionPages";

export const createPages = async (args: CreatePagesArgs) => {
  const institutionsWithCollections = await createInstitutionPages(args);
  await createCollectionPages({...args, institutionsWithCollections});
};
