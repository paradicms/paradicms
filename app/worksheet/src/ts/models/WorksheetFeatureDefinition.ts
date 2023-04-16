import {ConceptPropertyValue, Property} from "@paradicms/models";
import {Memoize} from "typescript-memoize";

export class WorksheetFeatureDefinition {
  constructor(private readonly property: Property) {}

  get description() {
    return this.property.comment;
  }

  get images() {
    return this.property.images;
  }

  get label() {
    return this.property.label;
  }

  get order() {
    return this.property.order;
  }

  get uri() {
    return this.property.uri;
  }

  @Memoize()
  get values() {
    return this.property.rangeValues
      .filter(propertyValue => propertyValue instanceof ConceptPropertyValue)
      .map(propertyValue => (propertyValue as ConceptPropertyValue).concept);
  }
}
