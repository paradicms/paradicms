import {NamedModel} from "./NamedModel";
import {requireDefined} from "./requireDefined";
import {dcterms, skos} from "@paradicms/vocabularies";

export class RightsStatement extends NamedModel {
  get definition(): string | null {
    return (
      this.getObjects(skos.definition).find(term => term.termType === "Literal")
        ?.value ?? null
    );
  }

  get description(): string | null {
    return (
      this.getObjects(dcterms.description).find(
        term => term.termType === "Literal"
      )?.value ?? null
    );
  }

  get identifier(): string {
    return requireDefined(
      this.getObjects(dcterms.identifier).find(
        term => term.termType === "Literal"
      )
    ).value;
  }

  get prefLabel(): string {
    return requireDefined(
      this.getObjects(skos.prefLabel).find(term => term.termType === "Literal")
    ).value;
  }

  toString() {
    return this.prefLabel;
  }
}
