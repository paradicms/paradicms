import {MultiPageExhibitionAppConfiguration} from "./MultiPageExhibitionAppConfiguration";
import {Dataset} from "@rdfjs/types";
import {getAppConfiguration} from "@paradicms/configuration";
import {fastStringToDataset} from "@paradicms/rdf";
import {configuration, rdf} from "@paradicms/vocabularies";

const defaultMultiPageExhibitionAppConfigurationDataset = fastStringToDataset(`
_:ac <${rdf.type.value}> <${configuration.AppConfiguration.value}> .
`);

export const getMultiPageExhibitionAppConfiguration = (
  datasets: readonly (Dataset | null)[]
): MultiPageExhibitionAppConfiguration => {
  for (const dataset of datasets.concat(
    defaultMultiPageExhibitionAppConfigurationDataset
  )) {
    if (!dataset) {
      continue;
    }
    const configuration = getAppConfiguration<
      MultiPageExhibitionAppConfiguration
    >(dataset, kwds => new MultiPageExhibitionAppConfiguration(kwds));
    if (configuration) {
      return configuration;
    }
  }
  throw new EvalError();
};
