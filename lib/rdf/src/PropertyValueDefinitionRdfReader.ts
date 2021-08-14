import {ModelRdfReader} from "./ModelRdfReader";
import {PropertyValueDefinition} from "@paradicms/models";
import {PARADICMS, RDF, RDFS} from "./vocabularies";
import {Store} from "n3";

export class PropertyValueDefinitionRdfReader extends ModelRdfReader<
  PropertyValueDefinition
> {
  read(): PropertyValueDefinition {
    const values = this.store.getObjects(this.nodeUri, RDF.value, null);
    if (values.length === 0) {
      throw new RangeError(
        "property value definition does not have an rdf:value"
      );
    }
    const value = this.toPropertyValue(values[0]);
    if (!value) {
      throw new RangeError(
        "property value definition does not have a valid rdf:value"
      );
    }

    return {
      label: this.readOptionalLiteral(RDFS.label)?.toString(),
      propertyUri: this.readRequiredParentNamedNode(RDF.predicate).value,
      uri: this.nodeUri,
      value,
    };
  }

  static readAll(store: Store) {
    return ModelRdfReader._readAll<PropertyValueDefinition>(
      node => new PropertyValueDefinitionRdfReader(node, store),
      store,
      PARADICMS.PropertyValueDefinition
    );
  }
}
