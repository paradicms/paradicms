import {NamedModel} from "@paradicms/models";
import {WorksheetFeatureDefinition} from "~/models/WorksheetFeatureDefinition";
import {WORKSHEET} from "~/vocabularies/WORKSHEET";
import {Memoize} from "typescript-memoize";
import {WorksheetDefinitionDataset} from "~/models/WorksheetDefinitionDataset";

export class WorksheetFeatureSetDefinition extends NamedModel {
  @Memoize()
  get features(): readonly WorksheetFeatureDefinition[] {
    return this.store
      .getQuads(null, WORKSHEET.featureSet, this.node, null)
      .filter((quad) => quad.subject.termType === "NamedNode")
      .map((quad) =>
        (
          this.dataset as WorksheetDefinitionDataset
        ).worksheetFeatureDefinitionByUri(quad.subject.value)
      );
  }
}
