import {BootstrapExhibitionAppConfiguration} from "./BootstrapExhibitionAppConfiguration";
import {Store} from "n3";
import {readAppConfiguration} from "@paradicms/configuration";

export const readBootstrapExhibitionAppConfiguration = (
  configurationStore: Store | null,
  datasetStore: Store
): BootstrapExhibitionAppConfiguration | null => {
  return readAppConfiguration<BootstrapExhibitionAppConfiguration>(
    configurationStore,
    datasetStore,
    ({graph, node, store, ...appConfigurationProps}) => {
      return {
        ...appConfigurationProps,
      };
    }
  );
};
