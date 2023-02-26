import {WorkSearchAppConfiguration} from "./WorkSearchAppConfiguration";
import {Dataset} from "@rdfjs/types";
import {getAppConfiguration} from "@paradicms/configuration";
import {parseIntoDataset} from "@paradicms/rdf";

const defaultWorkSearchAppConfigurationDataset = parseIntoDataset(`
@prefix : <http://www.paradicms.org/ns/configuration#> .
@prefix dcterms: <http://purl.org/dc/terms/> .

[] a :AppConfiguration;
  :workProperty [
    :filterable true ;
    :label "Creator" ;
    :predicate dcterms:creator
  ]
  ;
  :workProperty [
    :hidden true ;
    :searchable true ;
    :label "Description" ;
    :predicate dcterms:description
  ]
  ;
  :workProperty [
    :filterable true ;
    :label "Medium" ;
    :predicate dcterms:medium
  ]
  ;
  :workProperty [
    :filterable true ;
    :label "Subject" ;
    :predicate dcterms:subject
  ]
  ;
  :workProperty [
    :hidden true ;
    :searchable true ;
    :label "Title" ;
    :predicate :label
  ]
  ;
  :workProperty [
    :filterable true ;
    :label "Type" ;
    :predicate dcterms:type
  ]
  .
`);

export const getWorkSearchAppConfiguration = (
  datasets: readonly (Dataset | null)[]
): WorkSearchAppConfiguration => {
  for (const dataset of datasets.concat(
    defaultWorkSearchAppConfigurationDataset
  )) {
    if (!dataset) {
      continue;
    }
    const configuration = getAppConfiguration<WorkSearchAppConfiguration>(
      dataset,
      kwds => new WorkSearchAppConfiguration(kwds)
    );
    if (configuration) {
      return configuration;
    }
  }
  throw new EvalError();
};
