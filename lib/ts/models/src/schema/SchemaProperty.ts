import {SchemaNamedModel} from "./SchemaNamedModel";
import {Mixin} from "ts-mixer";
import {SchemaThingMixin} from "./SchemaThingMixin";
import {Property} from "../Property";
import {Text} from "../Text";
import {cms, schema} from "@paradicms/vocabularies";
import {getRdfInstanceQuads, mapTermToBoolean, mapTermToNumber,} from "@paradicms/rdf";
import {PropertyGroup} from "../PropertyGroup";
import {NamedNode} from "@rdfjs/types";
import {PropertyValue} from "../PropertyValue";
import {createPropertyValuesFromQuadSubjects} from "../createPropertyValuesFromQuadSubjects";
import {Memoize} from "typescript-memoize";
import {requireNonNull} from "@paradicms/utilities";

export class SchemaProperty extends Mixin(SchemaNamedModel, SchemaThingMixin)
  implements Property {
  get comment(): Text | null {
    return this.description;
  }

  get filterable(): boolean {
    return (
      this.findAndMapObject(cms.propertyFilterable, mapTermToBoolean) ?? false
    );
  }

  get groups(): readonly PropertyGroup[] {
    return this.modelSet.propertyGroupsByPropertyKey(this.key);
  }

  get hidden(): boolean {
    const hidden = this.findAndMapObject(cms.propertyHidden, mapTermToBoolean);
    if (hidden !== null) {
      return hidden;
    }
    return !this.filterable && !this.searchable;
  }

  override get label(): string {
    return requireNonNull(this.name);
  }

  get order(): number {
    return this.findAndMapObject(cms.propertyOrder, mapTermToNumber) ?? 0;
  }

  @Memoize()
  get range(): NamedNode | null {
    return this.findAndMapObject(schema.rangeIncludes, term =>
      term.termType === "NamedNode" ? term : null
    );
  }

  @Memoize()
  get rangeValues(): readonly PropertyValue[] {
    const range = this.range;
    if (range === null) {
      return [];
    }

    return createPropertyValuesFromQuadSubjects({
      dataset: this.dataset,
      modelSet: this.modelSet,
      property: this,
      quads: [
        ...getRdfInstanceQuads({
          class_: range,
          dataset: this.dataset,
        }),
      ],
    });
  }

  get searchable(): boolean {
    return (
      this.findAndMapObject(cms.propertySearchable, mapTermToBoolean) ?? false
    );
  }
}
