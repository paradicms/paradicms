import {foaf} from "@paradicms/vocabularies";
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

  readonly type: "Person" = "Person";
}
