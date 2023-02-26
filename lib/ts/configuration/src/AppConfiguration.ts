import {configuration} from "@paradicms/vocabularies";
import {Configuration} from "./Configuration";
import {datasetToFastString} from "@paradicms/rdf";

export class AppConfiguration extends Configuration {
  get stylesheet(): string | null {
    return this.findAndMapObject(configuration.stylesheet, term =>
      term.termType === "NamedNode" || term.termType === "Literal"
        ? term.value
        : null
    );
  }

  get title(): string | null {
    return this.findAndMapObject(configuration.title, term =>
      term.termType === "Literal" ? term.value : null
    );
  }

  toFastString(): string {
    return datasetToFastString(this.dataset);
  }
}
