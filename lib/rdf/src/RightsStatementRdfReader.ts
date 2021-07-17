import {ModelRdfReader} from "./ModelRdfReader";
import {RightsStatement} from "@paradicms/models";
import {DCTERMS, PARADICMS, SKOS} from "./vocabularies";
import {Store} from "n3";

export class RightsStatementRdfReader extends ModelRdfReader<RightsStatement> {
  read(): RightsStatement {
    return {
      definition: this.readOptionalLiteral(SKOS.definition)?.toString() ?? null,
      description:
        this.readOptionalLiteral(DCTERMS.description)?.toString() ?? null,
      identifier: this.readRequiredLiteral(DCTERMS.identifier).toString(),
      prefLabel: this.readRequiredLiteral(SKOS.prefLabel).toString(),
      uri: this.nodeUri,
    };
  }

  static readAll(store: Store) {
    return ModelRdfReader._readAll<RightsStatement>(
      node => new RightsStatementRdfReader(node, store),
      store,
      PARADICMS.RightsStatement,
    );
  }
}
