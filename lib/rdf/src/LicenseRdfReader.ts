import {ModelRdfReader} from "./ModelRdfReader";
import {License} from "@paradicms/models";
import {DCTERMS, PARADICMS} from "./vocabularies";
import {Store} from "n3";

export class LicenseRdfReader extends ModelRdfReader<License> {
  read(): License {
    return {
      identifier: this.readRequiredLiteral(DCTERMS.identifier).toString(),
      title: this.readRequiredLiteral(DCTERMS.title).toString(),
      uri: this.nodeUri,
    };
  }

  static readAll(store: Store) {
    return ModelRdfReader._readAll<License>(
      node => new LicenseRdfReader(node, store),
      store,
      PARADICMS.License,
    );
  }
}
