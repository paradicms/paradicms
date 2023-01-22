import {MultiPageExhibitionAppConfiguration} from "./MultiPageExhibitionAppConfiguration";
import {Dataset} from "@rdfjs/types";
import {readAppConfiguration} from "@paradicms/configuration";

export const readMultiPageExhibitionAppConfiguration = (
  configurationDataset: Dataset | null,
  modelSetDataset: Dataset
): MultiPageExhibitionAppConfiguration | null => {
  return readAppConfiguration<MultiPageExhibitionAppConfiguration>(
    configurationDataset,
    modelSetDataset,
    ({graph, node, dataset, ...appConfigurationProps}) => {
      return {
        ...appConfigurationProps,
      };
    }
  );
};
