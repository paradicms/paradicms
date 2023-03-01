import {contact, foaf} from "@paradicms/vocabularies";
import {Agent} from "./Agent";

export class Person extends Agent {
  get familyName(): string | null {
    return this.findAndMapObject(foaf.familyName, this.mapStringObject);
  }

  get givenName(): string | null {
    return this.findAndMapObject(foaf.givenName, this.mapStringObject);
  }

  get sortName(): string | null {
    return this.findAndMapObject(contact.sortName, this.mapStringObject);
  }
}
