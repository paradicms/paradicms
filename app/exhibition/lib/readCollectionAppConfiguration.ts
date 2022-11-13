import {ExhibitionAppConfiguration} from "./ExhibitionAppConfiguration";
import {Dataset} from "n3";
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
