import {ModelRdfReader} from "./ModelRdfReader";
import {PropertyValueDefinition} from "@paradicms/models";
import {PARADICMS, RDF, RDFS} from "./vocabularies";
import {Store} from "n3";
import {RdfReaderException} from "./RdfReaderException";

export class PropertyValueDefinitionRdfReader extends ModelRdfReader<
  PropertyValueDefinition
> {
  read(): PropertyValueDefinition {
    const propertyUris = this.readAllParentNamedNodes(RDF.predicate);
    if (propertyUris.length === 0) {
      throw new RdfReaderException(
        "property value definition must link to one or more property definitions"
      );
    }

    const values = this.store.getObjects(this.nodeUri, RDF.value, null);
    if (values.length === 0) {
      throw new RdfReaderException(
        "property value definition does not have an rdf:value"
      );
    }
    const value = this.toPropertyValue(values[0]);
    if (!value) {
      throw new RdfReaderException(
        "property value definition does not have a valid rdf:value"
      );
    }

    return {
      label: this.readOptionalLiteral(RDFS.label)?.toString() ?? null,
      propertyUris: propertyUris.map(propertyUri => propertyUri.value),
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
