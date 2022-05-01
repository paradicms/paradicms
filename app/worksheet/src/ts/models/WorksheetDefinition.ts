import {WorksheetFeatureSetDefinition} from "~/models/WorksheetFeatureSetDefinition";
import {WorksheetDefinitionDataset} from "~/models/WorksheetDefinitionDataset";
import {WorksheetFeatureValueDefinition} from "~/models/WorksheetFeatureValueDefinition";
import {WorksheetFeatureDefinition} from "~/models/WorksheetFeatureDefinition";

export class WorksheetDefinition {
  constructor(private readonly dataset: WorksheetDefinitionDataset) {}

  featureByUriOptional(uri: string): WorksheetFeatureDefinition | null {
    return this.dataset.worksheetFeatureDefinitionByUriOptional(uri);
  }

  get features(): readonly WorksheetFeatureDefinition[] {
    return this.dataset.worksheetFeatureDefinitions;
  }

  featureSetByUriOptional(uri: string): WorksheetFeatureSetDefinition | null {
    return this.dataset.worksheetFeatureSetDefinitionByUriOptional(uri);
  }

  get featureSets(): readonly WorksheetFeatureSetDefinition[] {
    return this.dataset.worksheetFeatureSetDefinitions;
  }

  featureValueByUriOptional(
    uri: string
  ): WorksheetFeatureValueDefinition | null {
    return this.dataset.namedValueByUriOptional(uri);
  }

  get featureValues(): readonly WorksheetFeatureValueDefinition[] {
    return this.dataset.namedValues;
  }
}
