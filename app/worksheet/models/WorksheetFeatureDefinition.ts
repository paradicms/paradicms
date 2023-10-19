import {Property} from "@paradicms/models";
import {Memoize} from "typescript-memoize";
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
    return this.property.iri;
  }

  get label() {
    return this.property.label;
  }

  get order() {
    return this.property.order;
  }

  @Memoize()
  get values(): readonly WorksheetFeatureValueDefinition[] {
    const values: WorksheetFeatureValueDefinition[] = [];
    for (const propertyValue of this.property.rangeValues) {
      if (propertyValue.type === "Concept") {
        values.push(new WorksheetFeatureValueDefinition(propertyValue.concept));
      }
    }
    return values;
  }
}
