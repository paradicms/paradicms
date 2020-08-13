import {CreatePagesArgs} from "gatsby";
import {createInstitutionPages} from "./createInstitutionPages";
import {createCollectionPages} from "./createCollectionPages";
import {createObjectPages} from "./createObjectPages";

export const createPages = async (args: CreatePagesArgs) => {
  const institutions = await createInstitutionPages(args);
  await createCollectionPages({...args, institutions});
  await createObjectPages({...args, institutions});
};
