import {ModelRdfReader} from "./ModelRdfReader";
import {Collection} from "@paradicms/models";
import {DCTERMS, PARADICMS} from "./vocabularies";
import {Store} from "n3";

export class CollectionRdfReader extends ModelRdfReader<Collection> {
  read(): Collection {
    return {
      institutionUri: this.readRequiredParentNamedNode(PARADICMS.institution)
        .value,
      title: this.readRequiredLiteral(DCTERMS.title).toString(),
      uri: this.nodeUri,
    };
  }

  static readAll(store: Store) {
    return ModelRdfReader._readAll<Collection>(
      node => new CollectionRdfReader(node, store),
      store,
      PARADICMS.Collection,
    );
  }
}
