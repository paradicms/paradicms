import {Mixin} from "ts-mixer";
import {Collection} from "../Collection";
import {Work} from "../Work";
import {requireNonNull} from "@paradicms/utilities";
import {SchemaCreativeWorkMixin} from "./SchemaCreativeWorkMixin";
import {schema} from "@paradicms/vocabularies";
import {SchemaModel} from "./SchemaModel";

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

  get works(): readonly Work[] {
    return this.filterAndMapObjects(schema.hasPart, term => term.termType === "NamedNode" ? this.modelSet.workByIri(term.value) : null);
  }
}
