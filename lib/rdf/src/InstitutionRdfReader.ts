import {ModelRdfReader} from "./ModelRdfReader";
import {Institution} from "@paradicms/models";
import {DCTERMS, FOAF, PARADICMS} from "./vocabularies";
import {RightsRdfReader} from "./RightsRdfReader";
import {Store} from "n3";

export class InstitutionRdfReader extends ModelRdfReader<Institution> {
  read(): Institution {
    let name = this.readOptionalLiteral(DCTERMS.title);
    if (!name) {
      name = this.readRequiredLiteral(FOAF.name_);
    }

    return {
      name: name.toString(),
      rights: new RightsRdfReader(this.node, this.store).read() ?? null,
      uri: this.nodeUri,
    };
  }

  static readAll(store: Store) {
    return ModelRdfReader._readAll<Institution>(
      node => new InstitutionRdfReader(node, store),
      store,
      PARADICMS.Institution,
    );
  }
}
