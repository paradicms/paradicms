import {dcterms} from "@paradicms/vocabularies";
import {requireNonNull} from "@paradicms/utilities";
import {ModelMixin} from "./ModelMixin";

export abstract class HasTitle extends ModelMixin {
  get title(): string {
    return requireNonNull(
      this.findAndMapObject(dcterms.title, term =>
        term.termType === "Literal" ? term.value : null
      )
    );
  }
}
