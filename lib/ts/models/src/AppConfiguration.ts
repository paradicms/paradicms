import {configuration} from "@paradicms/vocabularies";
import {ResourceBackedModel} from "./ResourceBackedModel";

export class AppConfiguration extends ResourceBackedModel {
  get objectsPerPage(): number | null {
    return this.findAndMapObject(
      configuration.objectsPerPage,
      this.mapIntObject
    );
  }

  get stylesheet(): string | null {
    return this.findAndMapObject(configuration.stylesheet, term =>
      term.termType === "NamedNode" || term.termType === "Literal"
        ? term.value
        : null
    );
  }

  get title(): string | null {
    return this.findAndMapObject(configuration.title, this.mapStringObject);
  }
}
