import { mapTermToString } from "@paradicms/rdf";
import { requireNonNull } from "@paradicms/utilities";
import { schema } from "@paradicms/vocabularies";
import { Mixin } from "ts-mixer";
import { Memoize } from "typescript-memoize";
import { Person } from "../Person";
import { SchemaModel } from "./SchemaModel";

export class SchemaPerson extends Mixin(
  SchemaModel
) implements Person {
  @Memoize()
  get familyName(): string | null {
    return this.findAndMapObject(schema.familyName, mapTermToString);
  }

  get homepage(): string | null {
    return this.urls.length > 0 ? this.urls[0] : null;
  }

  @Memoize()
  get givenName(): string | null {
    return this.findAndMapObject(schema.familyName, mapTermToString);
  }

  override get label(): string {
    return this.name;
  }

  override get name(): string {
    return requireNonNull(super.name);
  }

  override preMemoize(): void {
    super.preMemoize();
    this.familyName;
    this.givenName;
  }

  readonly type: "Person" = "Person";

  get works() {
    return this.iri ? this.modelSet.worksByAgentIri(this.iri) : [];
  }
}
