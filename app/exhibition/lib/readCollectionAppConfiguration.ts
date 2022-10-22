import {ExhibitionAppConfiguration} from "./ExhibitionAppConfiguration";
import {Store} from "n3";
import {readAppConfiguration} from "@paradicms/configuration";

export const readExhibitionAppConfiguration = (
  configurationStore: Store | null,
  datasetStore: Store
): ExhibitionAppConfiguration | null => {
  return readAppConfiguration<ExhibitionAppConfiguration>(
    configurationStore,
    datasetStore,
    ({graph, node, store, ...appConfigurationProps}) => {
      return {
        ...appConfigurationProps,
      };
    }
  );
};
