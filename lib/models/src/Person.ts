import {NamedModel} from "./NamedModel";
import {CONTACT, FOAF} from "./vocabularies";

export class Person extends NamedModel {
  get familyName(): string | null {
    return this.optionalString(FOAF.familyName);
  }

  get givenName(): string | null {
    return this.optionalString(FOAF.givenName);
  }

  get name(): string {
    return this.requiredString(FOAF.name_);
  }

  get sortName(): string | null {
    return this.optionalString(CONTACT.sortName);
  }
}
