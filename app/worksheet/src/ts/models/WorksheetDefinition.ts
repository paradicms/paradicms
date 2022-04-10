import {WorksheetFeatureSetDefinition} from "~/models/WorksheetFeatureSetDefinition";
import {WorksheetDefinitionDataset} from "~/models/WorksheetDefinitionDataset";

export class WorksheetDefinition {
  constructor(private readonly dataset: WorksheetDefinitionDataset) {}

  get featureSets(): readonly WorksheetFeatureSetDefinition[] {
    return this.dataset.worksheetFeatureSetDefinitions;
  }
}
