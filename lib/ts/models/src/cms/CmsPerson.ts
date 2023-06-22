import {contact, foaf} from "@paradicms/vocabularies";
import {Mixin} from "ts-mixer";
import {Person} from "../Person";
import {CmsAgent} from "./CmsAgent";
import {mapTermToString} from "@paradicms/rdf";

export class CmsPerson extends Mixin(CmsAgent) implements Person {
  get familyName(): string | null {
    return this.findAndMapObject(foaf.familyName, mapTermToString);
  }

  get givenName(): string | null {
    return this.findAndMapObject(foaf.givenName, mapTermToString);
  }

  get sortName(): string | null {
    return this.findAndMapObject(contact.sortName, mapTermToString);
  }

  readonly type: "Person" = "Person";
}
