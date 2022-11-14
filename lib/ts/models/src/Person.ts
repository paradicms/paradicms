import {contact, foaf} from "@paradicms/vocabularies";
import {Agent} from "./Agent";

export class Person extends Agent {
  get familyName(): string | null {
    return this.findAndMapObject(foaf.familyName, term =>
      term.termType === "Literal" ? term.value : null
    );
  }

  get givenName(): string | null {
    return this.findAndMapObject(foaf.givenName, term =>
      term.termType === "Literal" ? term.value : null
    );
  }

  get sortName(): string | null {
    return this.findAndMapObject(contact.sortName, term =>
      term.termType === "Literal" ? term.value : null
    );
  }
}
