import {HasAbstract, HasImages, HasTitle, NamedModel} from "@paradicms/models";
import {Memoize} from "typescript-memoize";
import {WorksheetFeatureValueDefinition} from "~/models/WorksheetFeatureValueDefinition";
import {Mixin} from "ts-mixer";

export class WorksheetFeatureDefinition extends Mixin(
  NamedModel,
  HasAbstract,
  HasImages,
  HasTitle
) {
  @Memoize()
  get values(): readonly WorksheetFeatureValueDefinition[] {
    return this.dataset.namedValuesByPropertyUri(this.uri);
  }
}
