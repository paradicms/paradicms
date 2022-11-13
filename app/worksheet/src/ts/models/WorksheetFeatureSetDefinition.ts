import {HasAbstract, HasImages, HasTitle, NamedModel} from "@paradicms/models";
import {WorksheetFeatureDefinition} from "~/models/WorksheetFeatureDefinition";
import {WORKSHEET} from "~/vocabularies/WORKSHEET";
import {Memoize} from "typescript-memoize";
import {WorksheetDefinitionDataset} from "~/models/WorksheetDefinitionDataset";
import {Mixin} from "ts-mixer";

export class WorksheetFeatureSetDefinition extends Mixin(
  NamedModel,
  HasAbstract,
  HasImages,
  HasTitle
) {
  @Memoize()
  get features(): readonly WorksheetFeatureDefinition[] {
    return this.store
      .getQuads(null, WORKSHEET.featureSet, this.node, null)
      .filter(quad => quad.subject.termType === "NamedNode")
      .map(quad =>
        (this
          .modelSet as WorksheetDefinitionDataset).worksheetFeatureDefinitionByUri(
          quad.subject.value
        )
      );
  }

  get featureUris(): readonly string[] {
    return this.features.map(feature => feature.uri);
  }
}
