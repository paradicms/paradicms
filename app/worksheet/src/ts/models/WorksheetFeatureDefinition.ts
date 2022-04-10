import {NamedModel} from "@paradicms/models";
import {Memoize} from "typescript-memoize";
import {WorksheetFeatureValueDefinition} from "~/models/WorksheetFeatureValueDefinition";

export class WorksheetFeatureDefinition extends NamedModel {
  @Memoize()
  get values(): readonly WorksheetFeatureValueDefinition[] {
    return this.dataset.namedValuesByPropertyUri(this.uri);
  }
}
