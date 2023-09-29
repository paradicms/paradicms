import { mapTermToNumber, mapTermToString } from "@paradicms/rdf";
import { configuration } from "@paradicms/vocabularies";
import { AppConfiguration } from "../AppConfiguration";
import { ResourceBackedModel } from "../ResourceBackedModel";
import { JsonAppConfiguration } from "../json/JsonAppConfiguration";

export class CmsAppConfiguration extends ResourceBackedModel
  implements AppConfiguration {
  get objectsPerPage(): number | null {
    return this.findAndMapObject(configuration.objectsPerPage, mapTermToNumber);
  }

  override preMemoize(): void {
    super.preMemoize();
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

  toJson(): JsonAppConfiguration {
    return {
      objectsPerPage: this.objectsPerPage,
      title: this.title,
      stylesheet: this.stylesheet,
    };
  }
}
