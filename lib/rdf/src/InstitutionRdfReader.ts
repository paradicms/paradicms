import {ModelRdfReader} from "./ModelRdfReader";
import {Institution} from "@paradicms/models";
import {FOAF, PARADICMS} from "./vocabularies";
import {IndexedFormula} from "rdflib";
import {RightsRdfReader} from "./RightsRdfReader";
import {ModelNode} from "./ModelNode";

export class InstitutionRdfReader extends ModelRdfReader<Institution> {
  constructor(node: ModelNode, store: IndexedFormula) {
    super(node, store);
  }

  read(): Institution {
    return {
      name: this.readRequiredLiteral(FOAF.name_).toString(),
      rights: new RightsRdfReader(this.node, this.store).read() ?? null,
      uri: this.nodeUri,
    };
  }

  static readAll(store: IndexedFormula) {
    return ModelRdfReader._readAll<Institution>(
      node => new InstitutionRdfReader(node, store),
      store,
      PARADICMS.Institution
    );
  }
}
