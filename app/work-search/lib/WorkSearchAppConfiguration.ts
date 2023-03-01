import {AppConfiguration, ConfigurationParameters, PropertyConfiguration,} from "@paradicms/configuration";
import {configuration, dcterms, rdf, xsd} from "@paradicms/vocabularies";
import {Dataset} from "@rdfjs/types";
import {fastRdfStringToDataset} from "@paradicms/rdf";

const defaultWorkSearchAppConfigurationDataset = fastRdfStringToDataset(`
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


export class WorkSearchAppConfiguration extends AppConfiguration {
  private constructor(kwds: ConfigurationParameters) {
    super(kwds);
  }

  static get default(): WorkSearchAppConfiguration {
    return WorkSearchAppConfiguration.fromDataset(defaultWorkSearchAppConfigurationDataset)!;
  }

  private static fromAppConfiguration(appConfiguration: AppConfiguration): WorkSearchAppConfiguration {
    return new WorkSearchAppConfiguration({
      dataset: appConfiguration.dataset,
      graphNode: appConfiguration.graphNode,
      node: appConfiguration.node,
    });
  }

  static override fromDataset(dataset: Dataset): WorkSearchAppConfiguration | null {
    const appConfiguration = AppConfiguration.fromDataset(dataset);
    return appConfiguration ? WorkSearchAppConfiguration.fromAppConfiguration(appConfiguration) : null;
  }

  static override fromDatasets(datasets: readonly (Dataset | null)[]): WorkSearchAppConfiguration | null {
    const appConfiguration = AppConfiguration.fromDatasets(datasets);
    return appConfiguration ? WorkSearchAppConfiguration.fromAppConfiguration(appConfiguration) : null;
  }

  get objectsPerPage(): number | null {
    return this.findAndMapObject(configuration.objectsPerPage, this.mapIntObject);
  }

  get workProperties(): readonly PropertyConfiguration[] {
    return this.filterAndMapObjects(configuration.workProperty, term => {
      switch (term.termType) {
        case "BlankNode":
        case "NamedNode":
          return new PropertyConfiguration({
            dataset: this.dataset,
            graphNode: this.graphNode,
            node: term,
          });
        default:
          return null;
      }
    });
  }
}
