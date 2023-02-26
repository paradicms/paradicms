import {MultiPageExhibitionAppConfiguration} from "./MultiPageExhibitionAppConfiguration";
import {Dataset} from "@rdfjs/types";
import {readAppConfiguration} from "@paradicms/configuration";
import {parseIntoDataset} from "@paradicms/rdf";

const defaultMultiPageExhibitionAppConfigurationDataset = parseIntoDataset(`
@prefix : <http://www.paradicms.org/ns/configuration#> .

[] a :AppConfiguration .
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
