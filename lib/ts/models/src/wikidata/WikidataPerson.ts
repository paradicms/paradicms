import {WikidataModel} from "./WikidataModel";
import {Person} from "../Person";
import {Work} from "../Work";
import {wdt} from "@paradicms/vocabularies";

export class WikidataPerson extends WikidataModel implements Person {
  get familyName(): string | null {
    return this.findAndMapStatementValue(wdt["P734"], this.mapStringObject);
  }

  get givenName(): string | null {
    return this.findAndMapStatementValue(wdt["P735"], this.mapStringObject);
  }

  readonly sameAs: readonly Person[] = [];
  readonly sortName = null;
  readonly type = "Person";
  readonly works: readonly Work[] = [];
}
