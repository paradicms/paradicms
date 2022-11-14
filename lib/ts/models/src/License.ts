import {NamedModel} from "./NamedModel";
import {dc11} from "@paradicms/vocabularies";
import {requireNonNull} from "@paradicms/utilities";

export class License extends NamedModel {
  get identifier(): string {
    return requireNonNull(
      this.findAndMapObject(dc11.identifier, term =>
        term.termType === "Literal" ? term.value : null
      )
    );
  }

  get title(): string {
    return requireNonNull(
      this.findAndMapObject(dc11.title, term =>
        term.termType === "Literal" ? term.value : null
      )
    );
  }

  toString() {
    return this.title;
  }
}
