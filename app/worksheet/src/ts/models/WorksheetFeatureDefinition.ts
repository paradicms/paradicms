import {HasAbstract, HasImages, HasTitle, NamedModel} from "@paradicms/models";
import {Memoize} from "typescript-memoize";
import {WorksheetFeatureValueDefinition} from "~/models/WorksheetFeatureValueDefinition";
import {Mixin} from "ts-mixer";
import {sh} from "@paradicms/vocabularies";

export class WorksheetFeatureDefinition extends Mixin(
  NamedModel,
  HasAbstract,
  HasImages,
  HasTitle
) {
  get order(): number {
    return this.findAndMapObject(sh.order, this.mapIntObject) ?? 0;
  }

  @Memoize()
  get values(): readonly WorksheetFeatureValueDefinition[] {
    return this.modelSet.conceptsByPropertyUri(this.uri);
  }
}
