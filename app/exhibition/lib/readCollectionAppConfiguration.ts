import {ExhibitionAppConfiguration} from "./ExhibitionAppConfiguration";
import {Store} from "n3";
import {readAppConfiguration} from "@paradicms/configuration";

export const readExhibitionAppConfiguration = (
  configurationStore: Store | null,
  modelSetStore: Store
): ExhibitionAppConfiguration | null => {
  return readAppConfiguration<ExhibitionAppConfiguration>(
    configurationStore,
    modelSetStore,
    ({graph, node, store, ...appConfigurationProps}) => {
      return {
        ...appConfigurationProps,
      };
    }
  );
};
