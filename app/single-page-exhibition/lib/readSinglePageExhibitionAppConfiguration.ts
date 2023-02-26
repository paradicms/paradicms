import {SinglePageExhibitionAppConfiguration} from "./SinglePageExhibitionAppConfiguration";
import {Dataset} from "@rdfjs/types";
import {readAppConfiguration} from "@paradicms/configuration";

export const readSinglePageExhibitionAppConfiguration = (
  configurationDataset: Dataset | null,
  modelSetDataset: Dataset
): SinglePageExhibitionAppConfiguration | null => {
  return getAppConfiguration<SinglePageExhibitionAppConfiguration>(
    configurationDataset,
    modelSetDataset,
    ({graph, node, dataset, ...appConfigurationProps}) => {
      return {
        ...appConfigurationProps,
      };
    }
  );
};
