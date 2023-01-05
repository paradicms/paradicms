import {NamedModel} from "./NamedModel";
import {dcterms, skos} from "@paradicms/vocabularies";
import {requireNonNull} from "@paradicms/utilities";

export class RightsStatement extends NamedModel {
  get definition(): string | null {
    return this.findAndMapObject(skos.definition, term =>
      term.termType === "Literal" ? term.value : null
    );
  }

  get description(): string | null {
    return this.findAndMapObject(dcterms.description, term =>
      term.termType === "Literal" ? term.value : null
    );
  }

  get identifier(): string {
    return requireNonNull(
      this.findAndMapObject(dcterms.identifier, term =>
        term.termType === "Literal" ? term.value : null
      )
    );
  }

  get prefLabel(): string {
    return requireNonNull(
      this.findAndMapObject(skos.prefLabel, term =>
        term.termType === "Literal" ? term.value : null
      )
    );
  }

  override toString() {
    return this.prefLabel;
  }
}
