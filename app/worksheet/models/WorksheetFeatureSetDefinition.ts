import {PropertyGroup} from "@paradicms/models";
import {Memoize} from "typescript-memoize";
import {WorksheetFeatureDefinition} from "~/models/WorksheetFeatureDefinition";

export class WorksheetFeatureSetDefinition {
  constructor(private readonly propertyGroup: PropertyGroup) {}

  get description() {
    return this.propertyGroup.comment;
  }

  @Memoize()
  get features(): readonly WorksheetFeatureDefinition[] {
    return this.propertyGroup.properties.map(
      property => new WorksheetFeatureDefinition(property)
    );
  }

  get featureIris(): readonly string[] {
    return this.features.map(feature => feature.iri);
  }

  get images() {
    return this.propertyGroup.images;
  }

  get label() {
    return this.propertyGroup.label;
  }

  get iri() {
    return this.propertyGroup.iri;
  }
}
