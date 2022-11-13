import {WorksheetFeatureSetDefinition} from "~/models/WorksheetFeatureSetDefinition";
import {WorksheetDefinitionDataset} from "~/models/WorksheetDefinitionDataset";
import {WorksheetFeatureValueDefinition} from "~/models/WorksheetFeatureValueDefinition";
import {WorksheetFeatureDefinition} from "~/models/WorksheetFeatureDefinition";

export class WorksheetDefinition {
  constructor(private readonly modelSet: WorksheetDefinitionDataset) {}

  get features(): readonly WorksheetFeatureDefinition[] {
    return this.modelSet.worksheetFeatureDefinitions;
  }

  featureSetByUriOptional(uri: string): WorksheetFeatureSetDefinition | null {
    return this.modelSet.worksheetFeatureSetDefinitionByUriOptional(uri);
  }

  get featureSets(): readonly WorksheetFeatureSetDefinition[] {
    return this.modelSet.worksheetFeatureSetDefinitions;
  }

  featureValueByUriOptional(
    uri: string
  ): WorksheetFeatureValueDefinition | null {
    return this.modelSet.namedValueByUriOptional(uri);
  }

  get featureValues(): readonly WorksheetFeatureValueDefinition[] {
    return this.modelSet.namedValues;
  }
}
