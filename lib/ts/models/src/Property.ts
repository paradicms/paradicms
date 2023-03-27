import {NamedModel} from "./NamedModel";
import {HasLabel} from "./mixins";
import {Mixin} from "ts-mixer";
import {NamedNode} from "@rdfjs/types";
import {rdfs} from "@paradicms/vocabularies";
import {PropertyValue} from "./PropertyValue";
import {Memoize} from "typescript-memoize";
import {getRdfInstanceQuads} from "@paradicms/rdf";

export class Property extends Mixin(NamedModel, HasLabel) {
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

    return PropertyValue.fromQuadSubjects(this.modelSet, [
      ...getRdfInstanceQuads({
        class_: range,
        dataset: this.dataset,
      }),
    ]);
  }
}
