import {contact, foaf} from "@paradicms/vocabularies";
import {CmsAgent} from "./CmsAgent";
import {Person} from "./Person";

export class CmsPerson extends CmsAgent implements Person {
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
