import {HasAbstract, HasImages, HasTitle, NamedModel} from "@paradicms/models";
import {Memoize} from "typescript-memoize";
import {WorksheetFeatureValueDefinition} from "~/models/WorksheetFeatureValueDefinition";
import {Mixin} from "ts-mixer";
import {sh, xsd} from "@paradicms/vocabularies";

export class WorksheetFeatureDefinition extends Mixin(
  NamedModel,
  HasAbstract,
  HasImages,
  HasTitle
) {
  get order(): number {
    const integerLiteral = this.getObjects(sh.order).find(
      term =>
        term.termType === "Literal" && term.datatype.value === xsd.integer.value
    );
    return integerLiteral ? parseInt(integerLiteral.value) : 0;
  }

  @Memoize()
  get values(): readonly WorksheetFeatureValueDefinition[] {
    return this.modelSet.namedValuesByPropertyUri(this.uri);
  }
}
