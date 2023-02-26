import {
  AppConfiguration,
  PropertyConfiguration,
} from "@paradicms/configuration";
import {configuration, xsd} from "@paradicms/vocabularies";

export class WorkSearchAppConfiguration extends AppConfiguration {
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
