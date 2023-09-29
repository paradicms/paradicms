import { mapTermToString } from "@paradicms/rdf";
import { wdt } from "@paradicms/vocabularies";
import { Memoize } from "typescript-memoize";
import { Person } from "../Person";
import { Work } from "../Work";
import { WikidataModel } from "./WikidataModel";

export class WikidataPerson extends WikidataModel implements Person {
  @Memoize()
  get familyName(): string | null {
    return this.findAndMapStatementValue(wdt["P734"], mapTermToString);
  }

  @Memoize()
  get givenName(): string | null {
    return this.findAndMapStatementValue(wdt["P735"], mapTermToString);
  }

  override preMemoize(): void {
    super.preMemoize();
    this.familyName;
    this.givenName;
  }

  readonly type = "Person";
  readonly works: readonly Work[] = [];
}
