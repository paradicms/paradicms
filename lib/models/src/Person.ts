import {CONTACT, FOAF} from "./vocabularies";
import {Agent} from "./Agent";

export class Person extends Agent {
  get familyName(): string | null {
    return this.optionalString(FOAF.familyName);
  }

  get givenName(): string | null {
    return this.optionalString(FOAF.givenName);
  }

  get sortName(): string | null {
    return this.optionalString(CONTACT.sortName);
  }
}
