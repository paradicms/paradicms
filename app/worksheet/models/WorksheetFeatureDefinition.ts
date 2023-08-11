import {ConceptPropertyValue, Property} from "@paradicms/models";
import {Memoize} from "typescript-memoize";
import invariant from "ts-invariant";
import {WorksheetFeatureValueDefinition} from "~/models/WorksheetFeatureValueDefinition";

export class WorksheetFeatureDefinition {
  constructor(private readonly property: Property) {}

  get description() {
    return this.property.comment;
  }

  get images() {
    return this.property.images;
  }

  get iri() {
    invariant(this.property.iris.length === 1, "property has multiple IRIs");
    return this.property.iris[0];
  }

  get key() {
    return this.property.key;
  }

  get label() {
    return this.property.label;
  }

  get order() {
    return this.property.order;
  }

  @Memoize()
  get values(): readonly WorksheetFeatureValueDefinition[] {
    return this.property.rangeValues
      .filter(propertyValue => propertyValue instanceof ConceptPropertyValue)
      .map(
        propertyValue =>
          new WorksheetFeatureValueDefinition(
            (propertyValue as ConceptPropertyValue).concept
          )
      );
  }
}
