import {PropertyGroup} from "@paradicms/models";
import {WorksheetFeatureDefinition} from "~/models/WorksheetFeatureDefinition";
import {Memoize} from "typescript-memoize";

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

  get title() {
    return this.propertyGroup.label;
  }

  get uri() {
    return this.propertyGroup.uri;
  }
}
