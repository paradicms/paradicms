import {ModelRdfReader} from "./ModelRdfReader";
import {PropertyDefinition} from "@paradicms/models";
import {PARADICMS, RDFS} from "./vocabularies";
import {Store} from "n3";

export class PropertyDefinitionRdfReader extends ModelRdfReader<
  PropertyDefinition
> {
  read(): PropertyDefinition {
    return {
      label: this.readRequiredLiteral(RDFS.label).toString(),
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
