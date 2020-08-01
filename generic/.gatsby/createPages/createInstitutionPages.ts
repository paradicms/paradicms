import {CreatePagesArgs} from "gatsby";
// import {Hrefs} from "../../Hrefs";
// import * as path from "path";
import {getInstitutions} from "./getInstitutions";

export const createInstitutionPages = async (args: CreatePagesArgs) => {
  // const {createPage} = args.actions;
  const institutions = await getInstitutions(args);
  console.log(institutions);
  // for (const dataset of datasets) {
  //   createPage({
  //     component: path.resolve("./src/templates/dataset/DatasetPage.tsx"),
  //     context: {
  //       datasetId: dataset.id,
  //     },
  //     path: Hrefs.datasets.dataset(dataset.id).toString(),
  //   });
  // }
};
