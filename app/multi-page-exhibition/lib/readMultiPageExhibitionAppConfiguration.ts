import {MultiPageExhibitionAppConfiguration} from "./MultiPageExhibitionAppConfiguration";
import {Dataset} from "@rdfjs/types";
import {readAppConfiguration} from "@paradicms/configuration";

export const readMultiPageExhibitionAppConfiguration = (
  configurationDataset: Dataset | null,
  modelSetDataset: Dataset
): MultiPageExhibitionAppConfiguration | null => {
  for (const dataset of [configurationDataset, modelSetDataset]) {
    if (!dataset) {
      continue;
    }
    const configuration = readAppConfiguration<
      MultiPageExhibitionAppConfiguration
    >(dataset, kwds => new MultiPageExhibitionAppConfiguration(kwds));
    if (configuration) {
      return configuration;
    }
  }
  return null;
};
