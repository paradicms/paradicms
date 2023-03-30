import {NamedModel} from "./NamedModel";
import {HasComment, HasImages, HasLabel} from "./mixins";
import {Mixin} from "ts-mixer";
import {NamedNode} from "@rdfjs/types";
import {cms, rdfs, sh} from "@paradicms/vocabularies";
import {PropertyValue} from "./PropertyValue";
import {Memoize} from "typescript-memoize";
import {getRdfInstanceQuads} from "@paradicms/rdf";
import {createPropertyValuesFromQuadSubjects} from "./createPropertyValuesFromQuadSubjects";

export class Property extends Mixin(
  NamedModel,
  HasComment,
  HasImages,
  HasLabel
) {
  get filterable(): boolean {
    return (
      this.findAndMapObject(cms.propertyFilterable, this.mapBooleanObject) ??
      false
    );
  }

  get groupUris(): readonly string[] {
    return this.filterAndMapObjects(cms.propertyGroup, term =>
      term.termType === "NamedNode" ? term.value : null
    );
  }

  get order(): number {
    return this.findAndMapObject(sh.order, this.mapIntObject) ?? 0;
  }

  @Memoize()
  get range(): NamedNode | null {
    return this.findAndMapObject(rdfs.range, term =>
      term.termType === "NamedNode" ? term : null
    );
  }

  @Memoize()
  get rangeValues(): readonly PropertyValue[] {
    const range = this.range;
    if (range === null) {
      return [];
    }

    return createPropertyValuesFromQuadSubjects(this.modelSet, [
      ...getRdfInstanceQuads({
        class_: range,
        dataset: this.dataset,
      }),
    ]);
  }

  get searchable(): boolean {
    return (
      this.findAndMapObject(cms.propertySearchable, this.mapBooleanObject) ??
      false
    );
  }
}
