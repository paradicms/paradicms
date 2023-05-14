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

  get featureUris(): readonly string[] {
    return this.features.map(feature => feature.uri);
  }

  get images() {
    return this.propertyGroup.images;
  }

  get label() {
    return this.propertyGroup.label;
  }

  get uri() {
    return this.propertyGroup.uri;
  }
}
