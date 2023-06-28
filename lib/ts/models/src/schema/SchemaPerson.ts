import {Mixin} from "ts-mixer";
import {SchemaModel} from "./SchemaModel";
import {Person} from "../Person";
import {requireNonNull} from "@paradicms/utilities";
import {schema} from "@paradicms/vocabularies";
import {mapTermToString} from "@paradicms/rdf";
import {Memoize} from "typescript-memoize";

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

  readonly type: "Person" = "Person";

  get works() {
    return this.iri ? this.modelSet.worksByAgentIri(this.iri) : [];
  }
}
