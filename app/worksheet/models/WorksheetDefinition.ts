import {WorksheetFeatureSetDefinition} from "~/models/WorksheetFeatureSetDefinition";
import {WorksheetFeatureValueDefinition} from "~/models/WorksheetFeatureValueDefinition";
import {WorksheetFeatureDefinition} from "~/models/WorksheetFeatureDefinition";
import {ModelSet} from "@paradicms/models";
import {Memoize} from "typescript-memoize";

export class WorksheetDefinition {
  constructor(private readonly modelSet: ModelSet) {}

  @Memoize()
  get features(): readonly WorksheetFeatureDefinition[] {
    return this.modelSet.properties.map(
      property => new WorksheetFeatureDefinition(property)
    );
  }

  @Memoize()
  featureSetByIriOptional(iri: string): WorksheetFeatureSetDefinition | null {
    const propertyGroup = this.modelSet.propertyGroupByIriOptional(iri);
    return propertyGroup
      ? new WorksheetFeatureSetDefinition(propertyGroup)
      : null;
  }

  @Memoize()
  get featureSets(): readonly WorksheetFeatureSetDefinition[] {
    return this.modelSet.propertyGroups.map(
      propertyGroup => new WorksheetFeatureSetDefinition(propertyGroup)
    );
  }

  featureValueByIriOptional(
    iri: string
  ): WorksheetFeatureValueDefinition | null {
    return (
      this.featureValues.find(featureValue => featureValue.iri === iri) ?? null
    );
  }

  @Memoize()
  get featureValues(): readonly WorksheetFeatureValueDefinition[] {
    return this.modelSet.concepts.map(
      concept => new WorksheetFeatureValueDefinition(concept)
    );
  }
}
