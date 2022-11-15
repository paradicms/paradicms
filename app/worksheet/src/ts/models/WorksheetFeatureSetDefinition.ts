import {HasAbstract, HasImages, HasTitle, NamedModel} from "@paradicms/models";
import {WorksheetFeatureDefinition} from "~/models/WorksheetFeatureDefinition";
import {worksheet} from "~/vocabularies";
import {Memoize} from "typescript-memoize";
import {WorksheetDefinitionModelSet} from "~/models/WorksheetDefinitionModelSet";
import {Mixin} from "ts-mixer";

export class WorksheetFeatureSetDefinition extends Mixin(
  NamedModel,
  HasAbstract,
  HasImages,
  HasTitle
) {
  @Memoize()
  get features(): readonly WorksheetFeatureDefinition[] {
    const features: WorksheetFeatureDefinition[] = [];
    for (const quad of this.dataset.match(
      null,
      worksheet.featureSet,
      this.node,
      null
    )) {
      if (quad.subject.termType === "NamedNode") {
        features.push(
          (this
            .modelSet as WorksheetDefinitionModelSet).worksheetFeatureDefinitionByUri(
            quad.subject.value
          )
        );
      }
    }
    return features;
  }

  get featureUris(): readonly string[] {
    return this.features.map(feature => feature.uri);
  }
}
