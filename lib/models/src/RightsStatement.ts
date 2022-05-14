import {NamedModel} from "./NamedModel";
import {requireDefined} from "./requireDefined";
import {DCTERMS, SKOS} from "@paradicms/vocabularies";

export class RightsStatement extends NamedModel {
  get definition(): string | null {
    return (
      this.propertyObjects(SKOS.definition).find(
        term => term.termType === "Literal"
      )?.value ?? null
    );
  }

  get description(): string | null {
    return (
      this.propertyObjects(DCTERMS.description).find(
        term => term.termType === "Literal"
      )?.value ?? null
    );
  }

  get identifier(): string {
    return requireDefined(
      this.propertyObjects(DCTERMS.identifier).find(
        term => term.termType === "Literal"
      )
    ).value;
  }

  get prefLabel(): string {
    return requireDefined(
      this.propertyObjects(SKOS.prefLabel).find(
        term => term.termType === "Literal"
      )
    ).value;
  }

  toString() {
    return this.prefLabel;
  }
}
