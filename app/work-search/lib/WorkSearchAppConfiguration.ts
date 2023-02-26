import {AppConfiguration, ConfigurationParameters, PropertyConfiguration,} from "@paradicms/configuration";
import {configuration, xsd} from "@paradicms/vocabularies";
import {Dataset} from "@rdfjs/types";

export class WorkSearchAppConfiguration extends AppConfiguration {
  private constructor(kwds: ConfigurationParameters) {
    super(kwds);
  }

  static override fromDataset(dataset: Dataset): WorkSearchAppConfiguration | null {
    const appConfiguration = AppConfiguration.fromDataset(dataset);
    if (appConfiguration) {
      return new WorkSearchAppConfiguration({
        dataset,
        graphNode: appConfiguration.graphNode,
        node: appConfiguration.node,
      });
    } else {
      return null;
    }
  }

  get objectsPerPage(): number | null {
    return this.findAndMapObject(configuration.objectsPerPage, term =>
      term.termType === "Literal" && term.datatype.value === xsd.integer.value
        ? parseInt(term.value)
        : null
    );
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
