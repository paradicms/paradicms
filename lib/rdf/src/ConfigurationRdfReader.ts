import {ModelRdfReader} from "./ModelRdfReader";
import {Configuration} from "@paradicms/models";
import {PARADICMS} from "./vocabularies";
import {Store} from "n3";

export class ConfigurationRdfReader extends ModelRdfReader<Configuration> {
  read(): Configuration {
    return {
      bootstrapStylesheetHref:
        this.readOptionalLiteral(PARADICMS.guiBootstrapStylesheetHref)?.toString() ?? null,
      documentTitle:
        this.readOptionalLiteral(PARADICMS.guiDocumentTitle)?.toString() ??
        null,
      navbarTitle:
        this.readOptionalLiteral(PARADICMS.guiNavbarTitle)?.toString() ?? null,
    };
  }

  static readAll(store: Store) {
    return ModelRdfReader._readAll<Configuration>(
      node => new ConfigurationRdfReader(node, store),
      store,
      PARADICMS.Configuration,
    );
  }
}
