import {ModelRdfReader} from "./ModelRdfReader";
import {PropertyDefinition} from "@paradicms/models";
import {PARADICMS, RDFS} from "./vocabularies";
import {Store} from "n3";

export class PropertyDefinitionRdfReader extends ModelRdfReader<
  PropertyDefinition
> {
  read(): PropertyDefinition {
    return {
      faceted:
        this.readOptionalLiteral(PARADICMS.faceted)?.toBoolean() ?? false,
      label: this.readRequiredLiteral(RDFS.label).toString(),
      fullTextSearchable:
        this.readOptionalLiteral(PARADICMS.fullTextSearchable)?.toBoolean() ??
        false,
      uri: this.nodeUri,
    };
  }

  static readAll(store: Store) {
    return ModelRdfReader._readAll<PropertyDefinition>(
      node => new PropertyDefinitionRdfReader(node, store),
      store,
      PARADICMS.PropertyDefinition,
    );
  }
}
