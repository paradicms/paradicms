import {SinglePageExhibitionAppConfiguration} from "./SinglePageExhibitionAppConfiguration";
import {Dataset} from "@rdfjs/types";
import {getAppConfiguration} from "@paradicms/configuration";
import {fastStringToDataset} from "@paradicms/rdf";
import {configuration, rdf} from "@paradicms/vocabularies";

const defaultSinglePageExhibitionAppConfigurationDataset = fastStringToDataset(`
_:ac <${rdf.type.value}> <${configuration.AppConfiguration.value}> .
`);

export const getSinglePageExhibitionAppConfiguration = (
  datasets: readonly (Dataset | null)[]
): SinglePageExhibitionAppConfiguration => {
  for (const dataset of datasets.concat(
    defaultSinglePageExhibitionAppConfigurationDataset
  )) {
    if (!dataset) {
      continue;
    }
    const configuration = getAppConfiguration<
      SinglePageExhibitionAppConfiguration
    >(dataset, kwds => new SinglePageExhibitionAppConfiguration(kwds));
    if (configuration) {
      return configuration;
    }
  }
  throw new EvalError();
};
