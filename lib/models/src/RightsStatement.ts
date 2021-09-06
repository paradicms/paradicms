import {NamedModel} from "./NamedModel";
import {DCTERMS, SKOS} from "./vocabularies";

export class RightsStatement extends NamedModel {
  get definition(): string | null {
    return this.optionalString(SKOS.definition);
  }

  get description(): string | null {
    return this.optionalString(DCTERMS.description);
  }

  get identifier(): string {
    return this.requiredString(DCTERMS.identifier);
  }

  get prefLabel(): string {
    return this.requiredString(SKOS.prefLabel);
  }

  toString() {
    return this.prefLabel;
  }
}
