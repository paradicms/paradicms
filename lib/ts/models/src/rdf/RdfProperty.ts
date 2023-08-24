import {
  getRdfInstanceQuads,
  mapTermToBoolean,
  mapTermToNumber,
  mapTermToString,
} from "@paradicms/rdf";
import {requireNonNull} from "@paradicms/utilities";
import {cms, rdfs} from "@paradicms/vocabularies";
import {NamedNode} from "@rdfjs/types";
import {Mixin} from "ts-mixer";
import {Memoize} from "typescript-memoize";
import {Property} from "../Property";
import {PropertyGroup} from "../PropertyGroup";
import {PropertyValue} from "../PropertyValue";
import {ResourceBackedModel} from "../ResourceBackedModel";
import {SomeImageThumbnailMixin} from "../SomeImageThumbnailMixin";
import {Text} from "../Text";
import {createPropertyValuesFromQuadSubjects} from "../createPropertyValuesFromQuadSubjects";
import {FoafImagesMixin} from "../foaf/FoafImagesMixin";
import {mapTermToText} from "../mapTermToText";

export class RdfProperty
  extends Mixin(ResourceBackedModel, FoafImagesMixin, SomeImageThumbnailMixin)
  implements Property {
  get comment(): Text | null {
    return this.findAndMapObject(rdfs.comment, term =>
      mapTermToText(this, term)
    );
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

  get label(): string {
    return requireNonNull(this.findAndMapObject(rdfs.label, mapTermToString));
  }

  get order(): number {
    return this.findAndMapObject(cms.propertyOrder, mapTermToNumber) ?? 0;
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
          includeSubclasses: true,
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
