import {ModelRdfReader} from "./ModelRdfReader";
import {Configuration} from "@paradicms/models";
import {PARADICMS} from "./vocabularies";
import {Store} from "n3";

export class ConfigurationRdfReader extends ModelRdfReader<Configuration> {
  read(): Configuration {
    return JSON.parse(this.readRequiredLiteral(PARADICMS.configurationJson).toString());
  }

  static readAll(store: Store) {
    return ModelRdfReader._readAll<Configuration>(
      node => new ConfigurationRdfReader(node, store),
      store,
      PARADICMS.Configuration,
    );
  }
}
