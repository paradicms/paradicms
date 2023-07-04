import {WikidataModel} from "./WikidataModel";
import {Person} from "../Person";
import {Work} from "../Work";
import {wdt} from "@paradicms/vocabularies";
import {mapTermToString} from "@paradicms/rdf";

export class WikidataPerson extends WikidataModel implements Person {
  get familyName(): string | null {
    return this.findAndMapStatementValue(wdt["P734"], mapTermToString);
  }

  get givenName(): string | null {
    return this.findAndMapStatementValue(wdt["P735"], mapTermToString);
  }

  readonly type = "Person";
  readonly works: readonly Work[] = [];
}
