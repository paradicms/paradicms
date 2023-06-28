import {foaf} from "@paradicms/vocabularies";
import {Mixin} from "ts-mixer";
import {Person} from "../Person";
import {FoafAgent} from "./FoafAgent";
import {mapTermToString} from "@paradicms/rdf";

export class FoafPerson extends Mixin(FoafAgent) implements Person {
  get familyName(): string | null {
    return this.findAndMapObject(foaf.familyName, mapTermToString);
  }

  get givenName(): string | null {
    return this.findAndMapObject(foaf.givenName, mapTermToString);
  }

  readonly type: "Person" = "Person";
}
