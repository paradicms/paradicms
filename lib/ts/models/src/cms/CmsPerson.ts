import {contact, foaf} from "@paradicms/vocabularies";
import {Person} from "../Person";
import {CmsAgent} from "./CmsAgent";

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

  readonly type: "Person" = "Person";
}