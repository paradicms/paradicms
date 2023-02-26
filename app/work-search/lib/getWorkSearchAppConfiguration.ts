import {WorkSearchAppConfiguration} from "./WorkSearchAppConfiguration";
import {Dataset} from "@rdfjs/types";
import {fastStringToDataset} from "@paradicms/rdf";
import {configuration, dcterms, rdf, xsd} from "@paradicms/vocabularies";

const defaultWorkSearchAppConfigurationDataset = fastStringToDataset(`
_:genid1 <${rdf.type.value}> <${configuration.AppConfiguration.value}> .
_:genid1 <${configuration.workProperty.value}> _:genid2 .
_:genid1 <${configuration.workProperty.value}> _:genid3 .
_:genid1 <${configuration.workProperty.value}> _:genid4 .
_:genid1 <${configuration.workProperty.value}> _:genid5 .
_:genid1 <${configuration.workProperty.value}> _:genid6 .
_:genid1 <${configuration.workProperty.value}> _:genid7 .
_:genid2 <${configuration.filterable.value}> "true"^^<${xsd.boolean.value}> .
_:genid2 <${configuration.label.value}> "Creator" .
_:genid2 <${configuration.predicate.value}> <${dcterms.creator.value}> .
_:genid3 <${configuration.hidden.value}> "true"^^<${xsd.boolean.value}> .
_:genid3 <${configuration.searchable.value}> "true"^^<${xsd.boolean.value}> .
_:genid3 <${configuration.label.value}> "Description" .
_:genid3 <${configuration.predicate.value}> <${dcterms.description.value}> .
_:genid4 <${configuration.filterable.value}> "true"^^<${xsd.boolean.value}> .
_:genid4 <${configuration.label.value}> "Medium" .
_:genid4 <${configuration.predicate.value}> <${dcterms.medium.value}> .
_:genid5 <${configuration.filterable.value}> "true"^^<${xsd.boolean.value}> .
_:genid5 <${configuration.label.value}> "Subject" .
_:genid5 <${configuration.predicate.value}> <${dcterms.subject.value}> .
_:genid6 <${configuration.hidden.value}> "true"^^<${xsd.boolean.value}> .
_:genid6 <${configuration.searchable.value}> "true"^^<${xsd.boolean.value}> .
_:genid6 <${configuration.label.value}> "Title" .
_:genid6 <${configuration.predicate.value}> <${configuration.label.value}> .
_:genid7 <${configuration.filterable.value}> "true"^^<${xsd.boolean.value}> .
_:genid7 <${configuration.label.value}> "Type" .
_:genid7 <${configuration.predicate.value}> <${dcterms.type.value}> .
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
    const configuration = WorkSearchAppConfiguration.fromDataset(dataset);
    if (configuration) {
      return configuration;
    }
  }
  throw new EvalError();
};
