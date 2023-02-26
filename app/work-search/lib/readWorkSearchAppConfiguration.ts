import {WorkSearchAppConfiguration} from "./WorkSearchAppConfiguration";
import {Dataset} from "@rdfjs/types";
import {readAppConfiguration} from "@paradicms/configuration";

export const readWorkSearchAppConfiguration = (
  datasets: readonly (Dataset | null)[]
): WorkSearchAppConfiguration | null => {
  for (const dataset of datasets) {
    if (!dataset) {
      continue;
    }
    const configuration = readAppConfiguration<WorkSearchAppConfiguration>(
      dataset,
      kwds => new WorkSearchAppConfiguration(kwds)
    );
    if (configuration) {
      return configuration;
    }
  }
  return null;
};
