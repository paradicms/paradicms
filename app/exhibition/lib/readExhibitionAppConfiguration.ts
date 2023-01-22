import {ExhibitionAppConfiguration} from "./ExhibitionAppConfiguration";
import {Dataset} from "@rdfjs/types";
import {readAppConfiguration} from "@paradicms/configuration";

export const readExhibitionAppConfiguration = (
  configurationDataset: Dataset | null,
  modelSetDataset: Dataset
): ExhibitionAppConfiguration | null => {
  return readAppConfiguration<ExhibitionAppConfiguration>(
    configurationDataset,
    modelSetDataset,
    ({graph, node, dataset, ...appConfigurationProps}) => {
      return {
        ...appConfigurationProps,
      };
    }
  );
};
