import {HasAbstract, HasImages, HasTitle, NamedModel} from "@paradicms/models";
import {Memoize} from "typescript-memoize";
import {WorksheetFeatureValueDefinition} from "~/models/WorksheetFeatureValueDefinition";
import {Mixin} from "ts-mixer";
import {sh, xsd} from "@paradicms/vocabularies";
import {parseIntOrNull} from "@paradicms/utilities";

export class WorksheetFeatureDefinition extends Mixin(
  NamedModel,
  HasAbstract,
  HasImages,
  HasTitle
) {
  get order(): number {
    return (
      this.findAndMapObject(sh.order, term =>
        term.termType == "Literal" &&
        (!term.datatype || term.datatype.equals(xsd.integer))
          ? parseIntOrNull(term.value)
          : null
      ) ?? 0
    );
  }

  @Memoize()
  get values(): readonly WorksheetFeatureValueDefinition[] {
    return this.modelSet.namedValuesByPropertyUri(this.uri);
  }
}
