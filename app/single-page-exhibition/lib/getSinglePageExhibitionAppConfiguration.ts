import {SinglePageExhibitionAppConfiguration} from "./SinglePageExhibitionAppConfiguration";
import {Dataset} from "@rdfjs/types";
import {getAppConfiguration} from "@paradicms/configuration";
import {parseIntoDataset} from "@paradicms/rdf";

const defaultSinglePageExhibitionAppConfigurationDataset = parseIntoDataset(`
@prefix : <http://www.paradicms.org/ns/configuration#> .

[] a :AppConfiguration .
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
