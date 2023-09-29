import { mapTermToString } from "@paradicms/rdf";
import { foaf } from "@paradicms/vocabularies";
import { Mixin } from "ts-mixer";
import { Memoize } from "typescript-memoize";
import { Person } from "../Person";
import { FoafAgent } from "./FoafAgent";

export class FoafPerson extends Mixin(FoafAgent) implements Person {
  @Memoize()
  get familyName(): string | null {
    return this.findAndMapObject(foaf.familyName, mapTermToString);
  }

  @Memoize()
  get givenName(): string | null {
    return this.findAndMapObject(foaf.givenName, mapTermToString);
  }

  override preMemoize(): void {
    super.preMemoize();
    this.familyName;
    this.givenName;
  }

  readonly type: "Person" = "Person";
}
