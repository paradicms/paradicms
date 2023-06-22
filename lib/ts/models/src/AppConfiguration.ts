import {configuration} from "@paradicms/vocabularies";
import {ResourceBackedModel} from "./ResourceBackedModel";
import {mapTermToNumber, mapTermToString} from "@paradicms/rdf";

export class AppConfiguration extends ResourceBackedModel {
  get objectsPerPage(): number | null {
    return this.findAndMapObject(configuration.objectsPerPage, mapTermToNumber);
  }

  get stylesheet(): string | null {
    return this.findAndMapObject(configuration.stylesheet, term =>
      term.termType === "NamedNode" || term.termType === "Literal"
        ? term.value
        : null
    );
  }

  get title(): string | null {
    return this.findAndMapObject(configuration.title, mapTermToString);
  }
}
