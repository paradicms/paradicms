import {ModelRdfReader} from "./ModelRdfReader";
import {Collection} from "@paradicms/models";
import {DCTERMS, PARADICMS} from "./vocabularies";
import {IndexedFormula} from "rdflib";

export class CollectionRdfReader extends ModelRdfReader<Collection> {
  read(): Collection {
    return {
      institutionUri: this.readRequiredParentNamedNode(PARADICMS.institution)
        .value,
      title: this.readRequiredLiteral(DCTERMS.title).toString(),
      uri: this.nodeUri,
    };
  }

  static readAll(store: IndexedFormula) {
    return ModelRdfReader._readAll<Collection>(
      node => new CollectionRdfReader(node, store),
      store,
      PARADICMS.Collection
    );
  }
}
