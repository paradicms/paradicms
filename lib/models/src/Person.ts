import {CONTACT, FOAF} from "@paradicms/vocabularies";
import {Agent} from "./Agent";

export class Person extends Agent {
  get familyName(): string | null {
    return (
      this.propertyObjects(FOAF.familyName).find(
        term => term.termType === "Literal"
      )?.value ?? null
    );
  }

  get givenName(): string | null {
    return (
      this.propertyObjects(FOAF.givenName).find(
        term => term.termType === "Literal"
      )?.value ?? null
    );
  }

  get sortName(): string | null {
    return (
      this.propertyObjects(CONTACT.sortName).find(
        term => term.termType === "Literal"
      )?.value ?? null
    );
  }
}
