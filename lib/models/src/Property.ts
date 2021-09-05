import {Dataset} from "./Dataset";
import {PropertyDefinition} from "./PropertyDefinition";
import {Term} from "n3";
import {PropertyValueDefinition} from "./PropertyValueDefinition";

export class Property {
  private readonly dataset: Dataset;
  readonly uri: string;
  readonly value: Term;

  constructor(kwds: {dataset: Dataset; uri: string; value: Term}) {
    this.dataset = kwds.dataset;
    this.uri = kwds.uri;
    this.value = kwds.value;
  }

  get definition(): PropertyDefinition | null {
    return this.dataset.propertyDefinitionByUri(this.uri);
  }

  get valueDefinition(): PropertyValueDefinition | null {
    const propertyDefinition = this.definition;
    if (!propertyDefinition) {
      return null;
    }
    for (const propertyValueDefinition of propertyDefinition.values) {
      if (this.value.equals(propertyValueDefinition.value)) {
        return propertyValueDefinition;
      }
    }
    return null;
  }
}
