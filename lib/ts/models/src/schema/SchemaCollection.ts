import { requireNonNull } from "@paradicms/utilities";
import { schema } from "@paradicms/vocabularies";
import { Mixin } from "ts-mixer";
import { Memoize } from "typescript-memoize";
import { Collection } from "../Collection";
import { Work } from "../Work";
import { SchemaCreativeWorkMixin } from "./SchemaCreativeWorkMixin";
import { SchemaModel } from "./SchemaModel";

export class SchemaCollection extends Mixin(
  SchemaModel,
  SchemaCreativeWorkMixin
) implements Collection {
  override get label(): string {
    return this.name;
  }

  override get name(): string {
    return requireNonNull(super.name);
  }

  @Memoize()
  get works(): readonly Work[] {
    return this.filterAndMapObjects(schema.hasPart, term => term.termType === "NamedNode" ? this.modelSet.workByIri(term) : null);
  }
}
