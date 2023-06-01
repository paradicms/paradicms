import {getRdfInstanceQuads} from "@paradicms/rdf";
import {cms, rdfs} from "@paradicms/vocabularies";
import {NamedNode} from "@rdfjs/types";
import {Mixin} from "ts-mixer";
import {Memoize} from "typescript-memoize";
import {Property} from "../Property";
import {PropertyValue} from "../PropertyValue";
import {ResourceBackedNamedModel} from "../ResourceBackedNamedModel";
import {createPropertyValuesFromQuadSubjects} from "../createPropertyValuesFromQuadSubjects";
import {CmsCommentMixin} from "./CmsCommentMixin";
import {CmsImagesMixin} from "./CmsImagesMixin";
import {CmsLabelMixin} from "./CmsLabelMixin";
import {PropertyGroup} from "../PropertyGroup";

export class CmsProperty
  extends Mixin(
    ResourceBackedNamedModel,
    CmsCommentMixin,
    CmsImagesMixin,
    CmsLabelMixin
  )
  implements Property {
  get filterable(): boolean {
    return (
      this.findAndMapObject(cms.propertyFilterable, this.mapBooleanObject) ??
      false
    );
  }

  get groups(): readonly PropertyGroup[] {
    return this.groupIris.map(groupIri =>
      this.modelSet.propertyGroupByIri(groupIri)
    );
  }

  get groupIris(): readonly string[] {
    return this.filterAndMapObjects(cms.propertyGroup, term =>
      term.termType === "NamedNode" ? term.value : null
    );
  }

  get hidden(): boolean {
    const hidden = this.findAndMapObject(
      cms.propertyHidden,
      this.mapBooleanObject
    );
    if (hidden !== null) {
      return hidden;
    }
    return !this.filterable && !this.searchable;
  }

  get order(): number {
    return this.findAndMapObject(cms.propertyOrder, this.mapIntObject) ?? 0;
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
      this.findAndMapObject(cms.propertySearchable, this.mapBooleanObject) ??
      false
    );
  }
}
