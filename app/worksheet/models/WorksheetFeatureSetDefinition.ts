import {PropertyGroup} from "@paradicms/models";
import {Memoize} from "typescript-memoize";
import {WorksheetFeatureDefinition} from "~/models/WorksheetFeatureDefinition";
import invariant from "ts-invariant";

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

  get iri() {
    invariant(
      this.propertyGroup.iris.length === 1,
      "PropertyGroup has multiple IRIs"
    );
    return this.propertyGroup.iris[0];
  }

  get label() {
    return this.propertyGroup.label;
  }
}
