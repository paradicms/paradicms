import {contact, foaf} from "@paradicms/vocabularies";
import {Agent} from "./Agent";

export class Person extends Agent {
  get familyName(): string | null {
    return (
      this.getObjects(foaf.familyName).find(term => term.termType === "Literal")
        ?.value ?? null
    );
  }

  get givenName(): string | null {
    return (
      this.getObjects(foaf.givenName).find(term => term.termType === "Literal")
        ?.value ?? null
    );
  }

  get sortName(): string | null {
    return (
      this.getObjects(contact.sortName).find(
        term => term.termType === "Literal"
      )?.value ?? null
    );
  }
}
